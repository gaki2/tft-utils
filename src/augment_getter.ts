import { AugmentName } from './types/augment';
import { LanguageType, Season } from './types';
import { augments_season_9b as augments_9b_ko } from './_generated/season_9b/augments_ko';
import { augments_season_9 as augments_9_en } from './_generated/season_9/augments_en';
import { augments_season_9 as augments_9_ko } from './_generated/season_9/augments_ko';
import { augments_season_9b as augments_9b_en } from './_generated/season_9b/augments_en';
import { AugmentData } from './script/augmentObject';

export const getAugments = (season: Season, lang: LanguageType) => {
  switch (season) {
    case 'season_9':
      return lang === 'ko' ? augments_9_ko : augments_9_en;
    case 'season_9b':
      return lang === 'ko' ? augments_9b_ko : augments_9b_en;
  }
};

type AugmentGetterProps = {
  name: AugmentName;
  season: Season;
  lang: LanguageType;
};

export const getAugmentData = ({ name, season, lang }: AugmentGetterProps) => {
  const defaultAugmentData = {
    apiName: 'no-matched-augment',
    description: 'no-matched-augment',
    name: 'no-matched-augment',
    url: '',
  };
  const augments = getAugments(season, lang);

  for (const key in augments) {
    if (augments[key].name === name) {
      return augments[key] as AugmentData;
    }
  }

  return defaultAugmentData;
};
