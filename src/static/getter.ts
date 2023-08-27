import { ChampionName } from '@src/static/types/championType';
import { champion_9 as Champions_9_en } from '@src/static/season_9/champion_en_us';
import { champion_9 as Champions_9_ko } from '@src/static/season_9/champion_ko_kr';
import { Season } from '@src/static/types/seasonType';
import { LanguageType } from '@src/script/config';

export const getAllChampions = (season: Season, lang: LanguageType = 'ko_kr') => {
  switch (season) {
    case 'season_9':
      return lang === 'ko_kr' ? Champions_9_ko : Champions_9_en;
  }
};

export const getAllChampionNames = (season: Season, lang: LanguageType = 'ko_kr') => {
  const champions = getAllChampions(season, lang);
  return Object.keys(champions) as ChampionName[];
};

export const getCost = (champion: ChampionName, season: Season) => {
  const champions = getAllChampions(season);
  return champions[champion].cost;
};
