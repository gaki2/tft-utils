import { ChampionData, ChampionName } from './types/champion';
import { champion_season_9 as Champions_9_en } from './_generated/season_9/champion_en';
import { champion_season_9 as Champions_9_ko } from './_generated/season_9/champion_ko';
import { trait_season_9 as Traits_9_en } from './_generated/season_9/trait_en';
import { trait_season_9 as Traits_9_ko } from './_generated/season_9/trait_ko';
import { champion_season_9b as Champions_9b_en } from './_generated/season_9b/champion_en';
import { champion_season_9b as Champions_9b_ko } from './_generated/season_9b/champion_ko';
import { trait_season_9b as Traits_9b_en } from './_generated/season_9b/trait_en';
import { trait_season_9b as Traits_9b_ko } from './_generated/season_9b/trait_ko';
import { Season } from './types/seasonType';
import { LanguageType } from './types/config';
import { ItemName } from './types/item';

const getChampions = (
  season: Season,
  lang: LanguageType = 'ko'
): { [key in ChampionName]?: ChampionData } => {
  switch (season) {
    case 'season_9':
      return lang === 'ko' ? Champions_9_ko : Champions_9_en;
    case 'season_9b':
      return lang === 'ko' ? Champions_9b_ko : Champions_9b_en;
  }
};

export const getTraits = (season: Season, lang: LanguageType = 'ko') => {
  switch (season) {
    case 'season_9':
      return lang === 'ko' ? Traits_9_ko : Traits_9_en;
    case 'season_9b':
      return lang === 'ko' ? Traits_9b_ko : Traits_9b_en;
  }
};

export const getAllChampionNames = (season: Season, lang: LanguageType = 'ko') => {
  const champions = getChampions(season, lang);
  return Object.keys(champions) as ChampionName[];
};

export const getCost = (champion: ChampionName, season: Season): number => {
  const champions = getChampions(season);
  if (!champions) {
    console.error(`${season} is invalid.`);
  }

  if (!champions[champion]) {
    console.error(`championName ${champion} is invalid!`);
  }

  return champions[champion]?.cost ?? 0;
};

export const getChampionData = (
  champion: ChampionName,
  season: Season,
  lang: LanguageType = 'ko'
) => {
  const championsData = getChampions(season, lang);
  return championsData[champion] as ChampionData;
};

export const getChampionTraits = (
  championName: ChampionName,
  season: Season,
  lang: LanguageType = 'ko'
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
  lang: LanguageType = 'ko'
): string => {
  const championsData = getChampions(season, lang);
  return championsData[championName]?.name ?? '';
};
