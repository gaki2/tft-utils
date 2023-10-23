import fs from 'fs';
import path from 'path';
import { LanguageType } from '../types/config';
import { writeFile } from './utils';
import { Season } from '../types/seasonType';
import { SEASON_SET_DATA_IDX_MAP } from './shared';
import { S3 } from '../environments/urls';
import { ChampionData } from '../types/champion';
import { SpaceToUnderBar } from '../utils/regex';

const jsonDir = path.join(__dirname, '../json');
const outDir = path.join(__dirname, '../_generated');

class Champion implements ChampionData {
  constructor(
    public name: string,
    public apiName: string,
    public url: string,
    public cost: number,
    public traits: string[]
  ) {}
}

/**
 * @example
 * handleException('TFT9_Zeus') // 'Zeus'
 */
const handleApiName = (_apiName: string) => {
  return _apiName.split('_')[1];
};

export async function createChampions(lang: LanguageType, season: Season) {
  const rawContent = fs.readFileSync(`${jsonDir}/${season}/tft_data_${lang}.json`, 'utf8');
  const championsDataFromRiotPortal = fs.readFileSync(
    `${jsonDir}/${season}/tft_champions_${lang}.json`,
    'utf8'
  );

  const allDataObject =
    JSON.parse(rawContent)['setData'][SEASON_SET_DATA_IDX_MAP[season]]['champions'];
  const championsDataObject = JSON.parse(championsDataFromRiotPortal)['data'];

  const championsData: { id: string; tier: number; name: string }[] = [];
  /**
   * 챔피언 이름들로 타입을 만든다.
   * ex) type Champion = '이렐리아' | '가렌' ...
   */
  const championNamesForType = new Set();
  for (const key of Object.keys(championsDataObject)) {
    const { id, tier, name } = championsDataObject[key];
    championsData.push({ id, tier, name });
  }

  const championsObject: { [key: string]: Champion } = {};
  for (let i = 0; i < championsData.length; i++) {
    const { id, tier, name: _name } = championsData[i];
    const name = removeQuote(replaceSpaceToUnderscore(_name));
    const targetChampion = allDataObject.find(
      (object: { apiName: string }) => object.apiName === id
    );
    const { traits } = targetChampion;
    if (traits.length && traits) {
      traits.forEach((trait: string, index: number) => {
        traits[index] = SpaceToUnderBar(trait);
      });
    }
    const apiName = handleApiName(id);
    const url = `${S3}/${season}/champions/${apiName}.png`;
    const champion = new Champion(name, id, url, tier, traits);
    championNamesForType.add(name);
    championsObject[id] = champion;
  }
  const ret = `export const champion_${season} = ${JSON.stringify(championsObject, null, 4)};
export type Champion_${season}_${lang} = ${Array.from(championNamesForType)
    .map((name) => `'${name}'`)
    .join(' | ')};
  `;
  await writeFile(`${outDir}/${season}/champion_${lang}.ts`, ret);
}

/**
 * 이름에 들어가는 스페이스를 _ 로 대체하기 위해서 사용함.
 */
const replaceSpaceToUnderscore = (str: string) => {
  return str.replace(/\s/g, '_');
};

/**
 * 이름에 들어가는 ' 를 제거하기 위해서 사용함.
 * Cho'Gath -> ChoGath
 */
const removeQuote = (str: string) => {
  return str.replace(/'/g, '');
};
