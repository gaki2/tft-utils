import fs from 'fs';
import path from 'path';
import { writeFile } from '@src/script/utils/file';
import { LANGUAGES, LanguageType, SEASONS, SeasonType } from '@src/script/config';

const publicDir = path.join(__dirname, '../../public');
const outDir = path.join(__dirname, '../static');

/**
 * trait_{lang}.ts 파일의 icon 속성을 실제 아이콘 이미지의 Path 로 만듦
 */
const parseIconPath = (path: string, season: SeasonType) => {
  const splitPath = path.split('/');
  const fileName = splitPath[splitPath.length - 1];
  return `/img/season_${season}/trait/${fileName.replace('tex', 'png')}`;
};

const createObject = (
  name: string,
  values: { apiName: string; icon: string }[],
  season: SeasonType
) => {
  return `export const ${name} = {
    ${values
      .map(
        (value) =>
          `'${value.apiName}': ${JSON.stringify(
            Object.assign(value, { icon: parseIconPath(value.icon, season) }),
            null,
            4
          )}`
      )
      .join(',\n    ')}
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
      createObject(`trait_${season}`, object, season)
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
