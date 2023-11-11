import { LanguageType, Season } from '../types';
import {
  ChampionName_season_9_ko,
  champions_season_9_ko,
} from '../_generated/season_9/champion_ko';
import {
  ChampionName_season_9b_ko,
  champions_season_9b_ko,
} from '../_generated/season_9b/champion_ko';
import {
  ChampionName_season_9_en,
  champions_season_9_en,
} from '../_generated/season_9/champion_en';
import {
  ChampionName_season_9b_en,
  champions_season_9b_en,
} from '../_generated/season_9b/champion_en';
import { Champion } from '../script/parser/championParser';

type ChampionDataSetMap = {
  season_9: {
    ko: typeof champions_season_9_ko;
    en: typeof champions_season_9_en;
  };
  season_9b: {
    ko: typeof champions_season_9b_ko;
    en: typeof champions_season_9b_en;
  };
};

type ChampionNameMap = {
  season_9: {
    ko: ChampionName_season_9_ko;
    en: ChampionName_season_9_en;
  };
  season_9b: {
    ko: ChampionName_season_9b_ko;
    en: ChampionName_season_9b_en;
  };
};

type ChampionDataSet<S extends Season, L extends LanguageType> = ChampionDataSetMap[S][L];
export type ChampionName<S extends Season, L extends LanguageType> = ChampionNameMap[S][L];

export class ChampionGetter<S extends Season, L extends LanguageType> {
  constructor(private season: S, private language: L) {}

  getChampionDataSet(): ChampionDataSet<S, L> {
    switch (this.season) {
      case 'season_9':
        return this.language === 'ko' ? champions_season_9_ko : champions_season_9_en;
      case 'season_9b':
        return this.language === 'ko' ? champions_season_9b_ko : champions_season_9b_en;
      default:
        throw Error(
          '에러발생 위치: getChampionDataSet() / 에러내용: 아이템 데이터셋을 불러오는데 실패하였습니다.'
        );
    }
  }

  getAllChampionNames(): ChampionName<S, L>[] {
    const dataSet = this.getChampionDataSet();
    return Object.values(dataSet).map((champion) => champion.name as ChampionName<S, L>);
  }

  getDataFromName(name: ChampionName<S, L>): Champion {
    const dataSet = this.getChampionDataSet();

    for (const [key, value] of Object.entries(dataSet)) {
      if (value.name === name) {
        return dataSet[key as keyof typeof dataSet] as Champion;
      }
    }

    return {
      apiName: '',
      name: '',
      url: '',
      cost: 0,
      traits: [],
    };
  }
}
