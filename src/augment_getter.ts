import { LanguageType, Season } from './types';
import {
  augments_season_9b_ko,
  AugmentName_season_9b_ko,
} from './_generated/season_9b/augments_ko';
import { augments_season_9_en, AugmentName_season_9_en } from './_generated/season_9/augments_en';
import { augments_season_9_ko, AugmentName_season_9_ko } from './_generated/season_9/augments_ko';
import {
  augments_season_9b_en,
  AugmentName_season_9b_en,
} from './_generated/season_9b/augments_en';
import { Augment } from './script/parser/augmentParser';

type AugmentDataSetMap = {
  season_9: {
    ko: typeof augments_season_9_ko;
    en: typeof augments_season_9_en;
  };
  season_9b: {
    ko: typeof augments_season_9b_ko;
    en: typeof augments_season_9b_en;
  };
};

type AugmentNameMap = {
  season_9: {
    ko: AugmentName_season_9_ko;
    en: AugmentName_season_9_en;
  };
  season_9b: {
    ko: AugmentName_season_9b_ko;
    en: AugmentName_season_9b_en;
  };
};

type AugmentDataSet<S extends Season, L extends LanguageType> = AugmentDataSetMap[S][L];
export type AugmentName<S extends Season, L extends LanguageType> = AugmentNameMap[S][L];

export class AugmentGetter<S extends Season, L extends LanguageType> {
  constructor(private season: S, private language: L) {}

  getAugmentDataSet(): AugmentDataSet<S, L> {
    switch (this.season) {
      case 'season_9':
        return this.language === 'ko' ? augments_season_9_ko : augments_season_9_en;
      case 'season_9b':
        return this.language === 'ko' ? augments_season_9b_ko : augments_season_9b_en;
      default:
        throw Error(
          '에러발생 위치: getAugmentDataSet() / 에러내용: 증강 데이터셋을 불러오는데 실패하였습니다.'
        );
    }
  }

  getAllAugmentNames(): AugmentName<S, L>[] {
    const dataSet = this.getAugmentDataSet();
    return Object.values(dataSet).map((augment) => augment.name as AugmentName<S, L>);
  }

  getDataFromName(name: AugmentName<S, L>): Augment {
    const dataSet = this.getAugmentDataSet();

    for (const [key, value] of Object.entries(dataSet)) {
      if (value.name === name) {
        return dataSet[key as keyof typeof dataSet] as Augment;
      }
    }

    return {
      apiName: '',
      description: '',
      name: '',
      url: '',
    };
  }
  // throw Error(`에러발생 위치: getDataFromName() / 에러내용: ${name} is not matched!`);
}
