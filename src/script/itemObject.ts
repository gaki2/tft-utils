import { LanguageType, Season } from '../types';
import path from 'path';
import fs from 'fs';
import { S3 } from '../environments/urls';
import { writeFile } from '../utils/file';

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

    const { name: _name, composition, desc, effects } = target;
    const name = _name.replace('<br>', '');

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
