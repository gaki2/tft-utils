import { LanguageType, Season } from '../types';
import { trait_season_9_ko, TraitName_season_9_ko } from '../_generated/season_9/trait_ko';
import { trait_season_9_en, TraitName_season_9_en } from '../_generated/season_9/trait_en';
import { trait_season_9b_en, TraitName_season_9b_en } from '../_generated/season_9b/trait_en';
import { trait_season_9b_ko, TraitName_season_9b_ko } from '../_generated/season_9b/trait_ko';
import { Trait } from '../script/parser/traitParser';

type TraitDataSetMap = {
  season_9: {
    ko: typeof trait_season_9_ko;
    en: typeof trait_season_9_en;
  };
  season_9b: {
    ko: typeof trait_season_9b_ko;
    en: typeof trait_season_9b_en;
  };
};

type TraitNameMap = {
  season_9: {
    ko: TraitName_season_9_ko;
    en: TraitName_season_9_en;
  };
  season_9b: {
    ko: TraitName_season_9b_ko;
    en: TraitName_season_9b_en;
  };
};

type TraitDataSet<S extends Season, L extends LanguageType> = TraitDataSetMap[S][L];
export type TraitName<S extends Season, L extends LanguageType> = TraitNameMap[S][L];

export class TraitGetter<S extends Season, L extends LanguageType> {
  constructor(private season: S, private language: L) {}

  getTraitDataSet(): TraitDataSet<S, L> {
    switch (this.season) {
      case 'season_9':
        return this.language === 'ko' ? trait_season_9_ko : trait_season_9_en;
      case 'season_9b':
        return this.language === 'ko' ? trait_season_9b_ko : trait_season_9b_en;
      default:
        throw Error(
          '에러발생 위치: getTraitDataSet() / 에러내용: 특성 데이터셋을 불러오는데 실패하였습니다.'
        );
    }
  }

  getAllTraitNames(): TraitName<S, L>[] {
    const dataSet = this.getTraitDataSet();
    return Object.values(dataSet).map((trait) => trait.name as TraitName<S, L>);
  }

  getDataFromName(name: TraitName<S, L>): Trait {
    const dataSet = this.getTraitDataSet();

    for (const [key, value] of Object.entries(dataSet)) {
      if (value.name === name) {
        return dataSet[key as keyof typeof dataSet] as Trait;
      }
    }

    return {
      apiName: '',
      name: '',
      url: '',
    };
  }
}
