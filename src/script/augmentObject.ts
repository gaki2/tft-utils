import path from 'path';
import { LanguageType, Season } from '../types';
import fs from 'fs';
import { S3 } from '../environments/urls';
import { writeFile } from '../utils/file';
import { convertKeysToUpperCase, isEmptyObject } from '../utils/my_lodash';

const jsonDir = path.join(__dirname, '../json');
const outDir = path.join(__dirname, '../_generated');

export interface AugmentData {
  apiName: string;
  description: string;
  name: string;
  url: string;
}

class Augment implements AugmentData {
  constructor(
    public apiName: string,
    public description: string,
    public name: string,
    public url: string
  ) {}
}

/**
 * desc 의 텍스트중에서 @variable@ 형태의 텍스트를 찾아서 effects 에서 해당 변수를 찾아서 값을 대체하는 함수.
 */
function replaceVariables(input: string, effects: any) {
  if (isEmptyObject(effects)) return input;
  convertKeysToUpperCase(effects);
  return input.replace(/@(\w+)(\*[\d]+)?@/g, function (match, p1, p2) {
    const value = effects[p1.toUpperCase()];
    if (value !== undefined) {
      return p2 ? (value * parseFloat(p2.slice(1))).toFixed(0) : value;
    }
    return match;
  });
}

export async function createAugments(lang: LanguageType, season: Season) {
  const allDataFromCDragon = fs.readFileSync(`${jsonDir}/${season}/tft_data_${lang}.json`, 'utf8');
  const augmentDataFromRiotPortal = fs.readFileSync(
    `${jsonDir}/${season}/tft_augments_${lang}.json`,
    'utf8'
  );

  const allDataObject = JSON.parse(allDataFromCDragon)['items'];
  const augmentDataObject = JSON.parse(augmentDataFromRiotPortal)['data'];

  const dataFromCDragon: { id: string; url: string }[] = [];

  for (const augment of Object.keys(augmentDataObject)) {
    dataFromCDragon.push({
      id: augmentDataObject[augment].id,
      url: `${S3}/${season}/augments/${augmentDataObject[augment].image.full}`,
    });
  }

  const augments: { [key in string]: AugmentData } = {};
  const augmentNamesForType = new Set();

  for (let i = 0; i < dataFromCDragon.length; i++) {
    const { id, url } = dataFromCDragon[i];
    const detailedData = allDataObject.find((object: { apiName: string }) => object.apiName === id);
    if (!detailedData) {
      console.error(`Error: ${id} is not matched! please update json file.`);
      continue;
    }

    const { name: _name, desc, effects } = detailedData;
    const name = _name.replace('<br>', '');
    augmentNamesForType.add(name);
    const replacedDesc = replaceVariables(desc, effects);
    const augment = new Augment(id, replacedDesc, name, url);
    augments[id] = augment;
  }
  /**
   *  증강 타입을 생성. ex) Augment_${season}_${lang} = '천군만마' | '자리비움' | ...
   */
  const ret = `export const augments_${season} = ${JSON.stringify(augments, null, 4)};
export type Augment_${season}_${lang} = ${Array.from(augmentNamesForType)
    .map((aug) => `"${aug}"`)
    .join(' | ')};
`;
  await writeFile(`${outDir}/${season}/augments_${lang}.ts`, ret);
}
