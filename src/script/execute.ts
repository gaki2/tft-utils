import { fetchJson } from './fetchCdragonJson';
import { championTrait } from '../script/traitObject';
import { championTemplate } from '../script/championObject';
import { LANGUAGES, LanguageType, SEASONS } from '../types/config';
import { Season } from '../types';

const createData = async (season: Season, lang: LanguageType) => {
  await fetchJson(lang, season);
  await championTemplate(lang, season);
  await championTrait(lang, season);
};

const createAllData = async () => {
  const promises = [];
  for (const lang of LANGUAGES) {
    for (const season of SEASONS) {
      promises.push(createData(season, lang));
    }
  }
  return Promise.all(promises);
};

createAllData();
