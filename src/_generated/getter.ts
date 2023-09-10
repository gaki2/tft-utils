import { ChampionName } from './/types/championType';
import { champion_9 as Champions_9_en } from './/season_9/champion_en_us';
import { champion_9 as Champions_9_ko } from './/season_9/champion_ko_kr';
import { trait_9 as Traits_9_en } from './/season_9/trait_en_us';
import { trait_9 as Traits_9_ko } from './/season_9/trait_ko_kr';
import { Season } from './types/seasonType';
import { LanguageType } from '../script/config';

export const getChampions = (season: Season, lang: LanguageType = 'ko_kr') => {
  switch (season) {
    case 'season_9':
      return lang === 'ko_kr' ? Champions_9_ko : Champions_9_en;
  }
};

export const getTraits = (season: Season, lang: LanguageType = 'ko_kr') => {
  switch (season) {
    case 'season_9':
      return lang === 'ko_kr' ? Traits_9_ko : Traits_9_en;
  }
};

export const getAllChampionNames = (season: Season, lang: LanguageType = 'ko_kr') => {
  const champions = getChampions(season, lang);
  return Object.keys(champions) as ChampionName[];
};

export const getCost = (champion: ChampionName, season: Season) => {
  const champions = getChampions(season);
  return champions[champion].cost;
};

export const getChampionData = (
  champion: ChampionName,
  season: Season,
  lang: LanguageType = 'ko_kr'
) => {
  const championsData = getChampions(season, lang);
  return championsData[champion];
};

export const getChampionTraits = (
  championName: ChampionName,
  season: Season,
  lang: LanguageType = 'ko_kr'
) => {
  const championData = getChampionData(championName, season, lang);
  const traitsData = getTraits(season, lang);
  const ret = [];
  for (const [key, value] of Object.entries(traitsData)) {
    if (championData.traits.includes(value.name)) {
      ret.push(Object.assign({}, value));
    }
  }
  return ret;
};

export const getChampionDisplayName = (
  championName: ChampionName,
  season: Season,
  lang: LanguageType = 'ko_kr'
) => {
  const championsData = getChampions(season, lang);
  return championsData[championName].name;
};
