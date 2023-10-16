import { LanguageType, Season } from '../types';
import path from 'path';
import fs from 'fs';
import { S3 } from '../environments/urls';
import { writeFile } from '../utils/file';
import { convertKeysToUpperCase, isEmptyObject } from '../utils/my_lodash';

const jsonDir = path.join(__dirname, '../json');
const outDir = path.join(__dirname, '../_generated');

export interface ItemData {
  apiName: string;
  name: string;
  composition: string[];
  url: string;
  desc: string;
}

class Item implements ItemData {
  constructor(
    public apiName: string,
    public name: string,
    public composition: string[],
    public url: string,
    public desc: string
  ) {}
}

export async function createItems(lang: LanguageType, season: Season) {
  const allDataFromCDragon = fs.readFileSync(`${jsonDir}/${season}/tft_data_${lang}.json`, 'utf8');
  const itemDataFromRiotPortal = fs.readFileSync(
    `${jsonDir}/${season}/tft_item_${lang}.json`,
    'utf8'
  );
  const allDataObject = JSON.parse(allDataFromCDragon)['items'];
  const itemDataObject = JSON.parse(itemDataFromRiotPortal)['data'];

  const itemNames: { id: string; url: string }[] = [];
  const itemNamesForType = new Set();

  for (const item of Object.keys(itemDataObject)) {
    const id = itemDataObject[item].id;
    const url = `${S3}/${season}/items/${itemDataObject[item].image.full}`;
    itemNames.push({ id, url });
  }

  const itemObject: { [key in string]: ItemData } = {};

  for (let i = 0; i < itemNames.length; i++) {
    const { id, url } = itemNames[i];

    const target = allDataObject.find((object: { apiName: string }) => object.apiName === id);
    if (!target) {
      console.error(`Error: ${id} is not matched!!`);
      continue;
    }

    const { name: originalName, composition, desc: original_desc, effects } = target;
    const name = cleanBrTag(originalName);
    const desc = replaceVariables(
      cleanAngleBracket(cleanPercent(cleanZWSP(original_desc))),
      effects
    );

    /** 가끔 name 이 빈 문자열인 것이 있으므로, 이것들을 없애준다. */
    if (name === '') {
      continue;
    }

    itemNamesForType.add(name);
    const itemData = new Item(id, name, composition, url, desc);
    itemObject[id] = itemData;
  }
  /**
   * // 아이템 타입을 생성. ex) Item_${season}_${lang} = '쇼진의 검' | '쇼진의 활' | ...
   */
  const ret = `export const items_${season} = ${JSON.stringify(itemObject, null, 4)};
export type Item_${season}_${lang} = ${Array.from(itemNamesForType)
    .map((item) => `"${item}"`)
    .join(' | ')}
  `;
  await writeFile(`${outDir}/${season}/items_${lang}.ts`, ret);
}

const cleanBrTag = (str: string) => {
  return str.replace(/<br>/g, '');
};

/**
 * <br> 태그를 제외한 <~~~>, </~~~> 형태의 태그를 제거함.
 */
const cleanAngleBracket = (str: string) => {
  return str.replace(/<(?!br>)[^>]*>/g, '');
};

/**
 * @~~~@ 형태의 변수를 실제 값으로 치환해준다.
 */
const replaceVariables = (input: string, effects: any) => {
  if (isEmptyObject(effects)) return input;
  convertKeysToUpperCase(effects);
  return input.replace(/@(\w+)(\*[\d]+)?@/g, function (match, p1, p2) {
    const value = effects[p1.toUpperCase()];
    if (value !== undefined) {
      return p2 ? (value * parseFloat(p2.slice(1))).toFixed(0) : value;
    }
    return match;
  });
};

/**
 * '%i: ~~~~ %' 형태의 값을 제거해준다.
 */
const cleanPercent = (str: string) => {
  return str.replace(/%i:[^%]*%/g, '');
};

const cleanZWSP = (str: string) => {
  return str.replace(/\u200B/g, '');
};
