import fs from 'fs';
import path from 'path';
import { LANGUAGES, LanguageType, SEASONS } from '../types/config';
import { writeFile } from './utils';
import {S3} from "../environments/urls";
import {Season} from "../types/seasonType";
import {SEASON_SET_DATA_IDX_MAP} from "./shared";

const jsonDir = path.join(__dirname, '../json');
const outDir = path.join(__dirname, '../_generated');

/**
 * trait_{lang}.ts 파일의 icon 속성을 실제 아이콘 이미지의 Path 로 만듦
 */
const parseIconPath = (path: string, season: Season) => {
  const splitPath = path.split('/');
  const fileName = splitPath[splitPath.length - 1];
  return `${S3}/${season}/traits/${fileName.replace('tex', 'png')}`;
};

const createObject = (
  name: string,
  values: { apiName: string; icon: string }[],
  season: Season
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

const championTrait = (lang: LanguageType, season: Season) =>
  new Promise((resolve, reject) => {
    const file = fs.readFileSync(`${jsonDir}/tft_data_${lang}.json`, 'utf8');
    const object = JSON.parse(file);

    const traits = object['setData'][SEASON_SET_DATA_IDX_MAP[season]]['traits'];
    writeFile(
      `${outDir}/${season}/trait_${lang}.ts`,
      createObject(`trait_${season}`, traits, season)
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
