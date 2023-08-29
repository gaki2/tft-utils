import fs from 'fs';
import path from 'path';
import { writeFile } from '@src/script/utils/file';
import { LANGUAGES, LanguageType, SEASONS, SeasonType } from '@src/script/config';

const publicDir = path.join(__dirname, '../../public');
const outDir = path.join(__dirname, '../static');

const createObject = (name: string, values: { name: string }[]) => {
  return `export const ${name} = {
    ${values.map((value) => `'${value.name}': ${JSON.stringify(value, null, 4)}`).join(',\n    ')}
  }`;
};

const championTrait = (lang: LanguageType, season: SeasonType) =>
  new Promise((resolve, reject) => {
    const file = fs.readFileSync(`${publicDir}/tft_data_${lang}.json`, 'utf8');
    const object = JSON.parse(file)['setData'].findLast(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (setData) => setData.number === season
    ).traits;
    writeFile(
      `${outDir}/season_${season}/trait_${lang}.ts`,
      createObject(`trait_${season}`, object)
    )
      .then(() => resolve(''))
      .catch((err) => reject(err));
  });

export const execute = () => {
  const promise = [];
  for (const lang of LANGUAGES) {
    for (const season of SEASONS) {
      promise.push(championTrait(lang, season));
    }
  }

  return Promise.all(promise);
};
