const fs = require('fs');
const path = require('path');
const { removePrefixFromKeys } = require('./utils');

/** <------------------- Constants ----------------> */
const TARGET_FILE_NAME = 'tft-champion.json';
const CHAMPION_NAME_TYPE = 'ChampionName';
const CHAMPIONS_INTERFACE = 'Champions';
const CHAMPION_INTERFACE = 'Champion';
const CHAMPION_IMAGE_INTERFACE = 'ChampionImage';

/**
 * __dirname: 현재 파일이 존재하는 디렉토리 경로
 */
const publicDir = path.join(__dirname, '../public');
const outputDir = path.join(__dirname, '../src/data');

function createChampionNameUnionType(jsonObject) {
  const champions = jsonObject.data;
  let type = `export type ${CHAMPION_NAME_TYPE} = `;

  for (const nameWithPrefix in champions) {
    const nameWithPrefixArr = nameWithPrefix.split('_');
    type += ` '${nameWithPrefixArr[1]}' |`;
  }

  const lastPipeIndex = type.lastIndexOf('|');
  type = type.substring(0, lastPipeIndex) + type.substring(lastPipeIndex + 1);
  type += ';';
  return type;
}

function createChampionsInterface() {
  let ret = `type ${CHAMPIONS_INTERFACE} = {
    [key in ${CHAMPION_NAME_TYPE}]: ${CHAMPION_INTERFACE}
};
  `;

  return ret;
}

function createDataInterface() {
  return `interface Data {
    type: string;
    version: string;
    data: ${CHAMPIONS_INTERFACE}
}
  `;
}

function createImageInterface() {
  return `interface ${CHAMPION_IMAGE_INTERFACE} {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}
  `;
}

function createChampionInterface() {
  return `interface ${CHAMPION_INTERFACE} {
    id: string;
    name: string;
    tier: number;
    image: ${CHAMPION_IMAGE_INTERFACE};
}
  `;
}

function createRawData(jsonObject) {
  let ret = 'export const rawChampions: Data =';

  const temp = {};
  temp.type = jsonObject.type;
  temp.version = jsonObject.version;
  temp.data = removePrefixFromKeys(jsonObject.data, 'TFT9_');

  const parsed = JSON.stringify(temp, null, 2);
  ret += parsed;
  ret += '\n';
  ret += 'export const champion = rawChampions.data;';

  return ret;
}

function createChampionData(jsonObject) {
  let ret = '';
  ret += createChampionNameUnionType(jsonObject);
  ret += '\n';
  ret += createChampionsInterface();
  ret += '\n';
  ret += createChampionInterface();
  ret += '\n';
  ret += createImageInterface();
  ret += '\n';
  ret += createDataInterface();
  ret += '\n';
  ret += createRawData(jsonObject);

  return ret;
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file === TARGET_FILE_NAME) {
      const jsonData = fs.readFileSync(fullPath, 'utf8');
      const jsonObject = JSON.parse(jsonData);

      const season = fullPath.split('/').find((snippet) => snippet.includes('season_'));

      fs.mkdir(`${outputDir}/${season}`, { recursive: true }, (err) => {
        if (err) {
          console.log('폴더 생성중 오류');
        }
      });
      fs.writeFileSync(`${outputDir}/${season}/champion.ts`, createChampionData(jsonObject));
    }
  }
}

processDirectory(publicDir);
