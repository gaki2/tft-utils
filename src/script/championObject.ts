import fs from 'fs';
import path from 'path';
import { LanguageType } from '../types/config';
import { writeFile } from './utils';
import { Season } from '../types/seasonType';
import { SEASON_SET_DATA_IDX_MAP } from './shared';

const jsonDir = path.join(__dirname, '../json');
const outDir = path.join(__dirname, '../_generated');

const createObject = (name: string, values: { apiName: string }[]) => {
  return `export const ${name} = {
    ${values
      .map((value) => `${handleException(value.apiName)}: ${JSON.stringify(value, null, 4)}`)
      .join(',\n    ')}
  }`;
};

export const championTemplate = (lang: LanguageType, season: Season) =>
  new Promise((resolve, reject) => {
    const file = fs.readFileSync(`${jsonDir}/${season}/tft_data_${lang}.json`, 'utf8');

    const object = JSON.parse(file);
    writeFile(
      `${outDir}/${season}/champion_${lang}.ts`,
      createObject(
        `champion_${season}`,
        object['setData'][SEASON_SET_DATA_IDX_MAP[season]]['champions']
      )
    )
      .then(() => {
        resolve('');
      })
      .catch((err) => reject(err));
  });

const handleException = (apiName: string) => {
  if (apiName === 'TFT9b_Aatrox') {
    return 'TFT9_Aatrox';
  }
  return apiName;
};
