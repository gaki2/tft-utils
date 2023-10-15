import { fetchJson } from './fetchCdragonJson';
import { createTraits } from '../script/traitObject';
import { createChampions } from '../script/championObject';
import { LANGUAGES, LanguageType, SEASONS } from '../types/config';
import { Season } from '../types';
import { createAugments } from './augmentObject';
import { createItems } from './itemObject';

const createData = async (season: Season, lang: LanguageType) => {
  await fetchJson(lang, season);
  await createTraits(lang, season);
  await createChampions(lang, season);
  await createAugments(lang, season);
  await createItems(lang, season);
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
