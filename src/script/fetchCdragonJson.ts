import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { LanguageType } from '../types/config';
import { Season } from '../types';
import { writeFile } from '../utils/file';

const outDir = path.join(__dirname, '../json');

const seasonVersionMap = {
  season_9: '13.15',
  season_9b: '13.18',
};

export const fetchJson = (language: LanguageType, season: Season) => {
  const version = seasonVersionMap[season];
  const filePath = `https://raw.communitydragon.org/${version}/cdragon/tft/${language}.json`;
  const output = `${outDir}/${season}/tft_data_${language}.json`;

  return new Promise((resolve, reject) => {
    if (fs.existsSync(output)) {
      console.log(`Skip: ${filePath} File already exists. ${season} ${language}`);
      resolve('File already exists');
    } else {
      axios
        .get(filePath)
        .then((response) => {
          const jsonData = response.data;
          writeFile(
            `${outDir}/${season}/tft_data_${language}.json`,
            JSON.stringify(jsonData, null, 2)
          ).then(() => {
            console.log(`${filePath} File saved`);
            resolve('');
          });
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};
