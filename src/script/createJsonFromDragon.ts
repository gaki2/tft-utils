import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { LANGUAGES } from '@src/script/config';

const outDir = path.join(__dirname, '../../public');
const baseUrl = 'https://raw.communitydragon.org/latest/cdragon/tft';

const getJsonData = (url: string, language: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        const jsonData = response.data;
        fs.writeFileSync(`${outDir}/tft_data_${language}.json`, JSON.stringify(jsonData, null, 2));
        resolve('');
      })
      .catch(() => {
        reject('');
      });
  });
};

export const execute = async () => {
  const promises = LANGUAGES.map((language) => {
    const url = `${baseUrl}/${language}.json`;
    return getJsonData(url, language);
  });

  return Promise.all(promises);
};
