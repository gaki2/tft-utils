import fs from 'fs';
import path from 'path';
import { LANGUAGES, LanguageType, SEASONS } from '../types/config';
import { writeFile } from './utils';
import {Season} from "../types/seasonType";
import {SEASON_SET_DATA_IDX_MAP} from "./shared";

const jsonDir = path.join(__dirname, '../json');
const outDir = path.join(__dirname, '../_generated');

const createObject = (name: string, values: { apiName: string }[]) => {
  return `export const ${name} = {
    ${values.map((value) => `${handleError(value.apiName)}: ${JSON.stringify(value, null, 4)}`).join(',\n    ')}
  }`;
};

const championTemplate = (lang: LanguageType, season: Season) =>
  new Promise((resolve, reject) => {
    const file = fs.readFileSync(`${jsonDir}/tft_data_${lang}.json`, 'utf8');

    const object = JSON.parse(file);
    writeFile(
      `${outDir}/${season}/champion_${lang}.ts`,
      createObject(`champion_${season}`, object['setData'][SEASON_SET_DATA_IDX_MAP[season]]['champions'])
    )
      .then(() => {
        resolve('');
      })
      .catch((err) => reject(err));
  });

export const execute = () => {
  const promises = [];
  for (const lang of LANGUAGES) {
    for (const season of SEASONS) {
      promises.push(championTemplate(lang, season));
    }
  }
  return Promise.all(promises);
};

const handleError = (apiName: string) => {
  if (apiName === 'TFT9b_Aatrox') {
    return 'TFT9_Aatrox';
  }
  return apiName
}