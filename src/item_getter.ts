import { ItemName } from './types/item';
import { LanguageType, Season } from './types';
import { items_season_9 as items_9_en } from './_generated/season_9/items_en';
import { items_season_9 as items_9_ko } from './_generated/season_9/items_ko';
import { items_season_9b as items_9b_en } from './_generated/season_9b/items_en';
import { items_season_9b as items_9b_ko } from './_generated/season_9b/items_ko';
import { ItemData } from './script/itemObject';

type ItemGetterProps = {
  name: ItemName;
  season: Season;
  lang: LanguageType;
};

export const getItems = (season: Season, lang: LanguageType) => {
  switch (season) {
    case 'season_9':
      return lang === 'ko' ? items_9_ko : items_9_en;
    case 'season_9b':
      return lang === 'ko' ? items_9b_ko : items_9b_en;
  }
};

export const getItemData = ({ name, season, lang }: ItemGetterProps) => {
  const defaultItemData: ItemData = {
    apiName: 'no-matched-item',
    name: 'no-matched-item',
    composition: [],
    url: '',
    desc: '',
  };
  const items = getItems(season, lang);

  for (const key in items) {
    if (items[key].name === name) {
      return items[key] as ItemData;
    }
  }

  return defaultItemData;
};
