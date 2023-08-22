// @ts-check
const fs = require('fs');
const path = require('path');
const { removeStringPrefix } = require('./utils');

const publicDir = path.join(__dirname, '../public');
const outputDir = path.join(__dirname, '../lang');
const jsonFilePath = path.join(__dirname, '../lang');

const seasons = ['season_9'];
const langs = ['ko'];

/**
 *
 * @param directory {string}
 * 탐색을 시작할 디렉토리
 * @param season {string}
 * ex) 'season_9'
 * @param lang {langs}
 * ex) 'ko'
 */
function processDirectory(directory, season, lang) {
  const files = fs.readdirSync(directory);
  const existingJson = JSON.parse(
    fs.readFileSync(`${jsonFilePath}/${lang}/${season}_static.json`, 'utf8')
  );

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    /**
     * 현재 파일이 디렉토리이고, 디렉토리 이름이 season 과 같다면
     */
    if (stat.isDirectory() && file === season) {
      const targetFiles = fs.readdirSync(fullPath);
      for (const targetFile of targetFiles) {
        switch (targetFile) {
          // 이 switch 케이스는 챔피언 이름 키값을 만드는 코드입니다.
          case 'tft-champion.json':
            const championJsonData = fs.readFileSync(`${fullPath}/${targetFile}`, 'utf8');
            const object = JSON.parse(championJsonData).data;
            for (key in object) {
              const championNameKey = object[key].id.split('_')[1].toUpperCase();
              existingJson[championNameKey] = object[key].name;
            }
        }
      }
    }

    fs.writeFileSync(`${outputDir}/${lang}/${season}.json`, JSON.stringify(existingJson, null, 2));
  }
}

for (const season of seasons) {
  for (const lang of langs) {
    processDirectory(publicDir, season, lang);
  }
}
