import fs from 'fs';
import path from 'path';
import { LanguageType } from '../types/config';
import { writeFile } from './utils';
import { Season } from '../types/seasonType';
import { SEASON_SET_DATA_IDX_MAP } from './shared';
import { S3 } from '../environments/urls';
import { ChampionData } from '../types/champion';

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

  for (const key of Object.keys(championsDataObject)) {
    const { id, tier, name } = championsDataObject[key];
    championsData.push({ id, tier, name });
  }

  const championsObject: { [key: string]: Champion } = {};
  for (let i = 0; i < championsData.length; i++) {
    const { id, tier, name } = championsData[i];

    const targetChampion = allDataObject.find(
      (object: { apiName: string }) => object.apiName === id
    );
    const { traits } = targetChampion;
    const apiName = handleApiName(id);
    const url = `${S3}/${season}/champions/${apiName}.png`;
    const champion = new Champion(name, id, url, tier, traits);

    championsObject[id] = champion;
  }
  const ret = `export const champion_${season} = ${JSON.stringify(championsObject, null, 4)};`;
  await writeFile(`${outDir}/${season}/champion_${lang}.ts`, ret);
}
