import fs from 'fs';
import path from 'path';
import { LANGUAGES, LanguageType, SEASONS, SeasonType } from './config';
import { writeFile } from './utils/file';

const publicDir = path.join(__dirname, '../../public');
const outDir = path.join(__dirname, '../_generated');

const createObject = (name: string, values: { apiName: string }[]) => {
  return `export const ${name} = {
    ${values.map((value) => `${value.apiName}: ${JSON.stringify(value, null, 4)}`).join(',\n    ')}
  }`;
};

const championTemplate = (lang: LanguageType, season: SeasonType) =>
  new Promise((resolve, reject) => {
    const file = fs.readFileSync(`${publicDir}/tft_data_${lang}.json`, 'utf8');
    const object = JSON.parse(file);
    writeFile(
      `${outDir}/season_${season}/champion_${lang}.ts`,
      createObject(`champion_${season}`, object['sets'][season]['champions'])
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
