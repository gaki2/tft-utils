import { LanguageType, Season } from './types';
import { trait_season_9_ko } from './_generated/season_9/trait_ko';
import { trait_season_9_en } from './_generated/season_9/trait_en';
import { trait_season_9b_ko } from './_generated/season_9b/trait_ko';
import { trait_season_9b_en } from './_generated/season_9b/trait_en';
import { TraitData, TraitName } from './types/trait';

export const getTraits = (season: Season, lang: LanguageType) => {
  switch (season) {
    case 'season_9':
      return lang === 'ko' ? trait_season_9_ko : trait_season_9_en;
    case 'season_9b':
      return lang === 'ko' ? trait_season_9b_ko : trait_season_9b_en;
  }
};

type TraitGetterProps = {
  name: TraitName;
  season: Season;
  lang: LanguageType;
};

export const getTraitData = ({ name, season, lang }: TraitGetterProps) => {
  const traits = getTraits(season, lang);

  for (const key in traits) {
    if (traits[key].name === name) {
      return traits[key] as TraitData;
    }
  }

  return {
    apiName: 'no-matched-trait',
    name: 'no-matched-trait',
    url: '',
  };
};
