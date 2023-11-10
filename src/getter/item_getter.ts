import { LanguageType, Season } from '../types';
import { items_season_9_en, ItemName_season_9_en } from '../_generated/season_9/items_en';
import { items_season_9_ko, ItemName_season_9_ko } from '../_generated/season_9/items_ko';
import { items_season_9b_en, ItemName_season_9b_en } from '../_generated/season_9b/items_en';
import { items_season_9b_ko, ItemName_season_9b_ko } from '../_generated/season_9b/items_ko';
import { Item } from '../script/parser/itemParser';
import { item_stat_season_9b } from '../_template/season_9b/item_stat';

type ItemDataSetMap = {
  season_9: {
    ko: typeof items_season_9_ko;
    en: typeof items_season_9_en;
  };
  season_9b: {
    ko: typeof items_season_9b_ko;
    en: typeof items_season_9b_en;
  };
};

type ItemNameMap = {
  season_9: {
    ko: ItemName_season_9_ko;
    en: ItemName_season_9_en;
  };
  season_9b: {
    ko: ItemName_season_9b_ko;
    en: ItemName_season_9b_en;
  };
};

type ItemDataSet<S extends Season, L extends LanguageType> = ItemDataSetMap[S][L];
export type ItemName<S extends Season, L extends LanguageType> = ItemNameMap[S][L];
export type ItemApiName<S extends Season, L extends LanguageType> = keyof ItemDataSetMap[S][L];

export class ItemGetter<S extends Season, L extends LanguageType> {
  constructor(private season: S, private language: L) {}

  getItemDataSet(): ItemDataSet<S, L> {
    switch (this.season) {
      case 'season_9':
        return this.language === 'ko' ? items_season_9_ko : items_season_9_en;
      case 'season_9b':
        return this.language === 'ko' ? items_season_9b_ko : items_season_9b_en;
      default:
        throw Error(
          '에러발생 위치: getAugmentDataSet() / 에러내용: 증강 데이터셋을 불러오는데 실패하였습니다.'
        );
    }
  }

  getItemStatDataSet() {
    switch (this.season) {
      case 'season_9':
        return {};
      case 'season_9b':
        return item_stat_season_9b;
      default:
        return {};
    }
  }

  getAllItemNames(): ItemName<S, L>[] {
    const dataSet = this.getItemDataSet();
    return Object.values(dataSet).map((augment) => augment.name as ItemName<S, L>);
  }

  getDataFromName(name: ItemName<S, L>): Item {
    const dataSet = this.getItemDataSet();
    const itemStatDataSet = this.getItemStatDataSet();

    for (const [key, value] of Object.entries(dataSet)) {
      if (value.name === name) {
        const stat = itemStatDataSet?.[key as string];

        return { ...dataSet[key as keyof typeof dataSet], stat: stat ?? {} } as unknown as Item;
      }
    }

    return {
      apiName: '',
      name: '',
      url: '',
      desc: '',
      composition: [],
      stat: {},
    };
  }

  getDataFromApiName(apiName: ItemApiName<S, L>): Item {
    const dataSet = this.getItemDataSet();
    const itemStatDataSet = this.getItemStatDataSet();
    const stat = itemStatDataSet?.[apiName as string];

    if (!dataSet[apiName]) {
      return {
        apiName: '',
        name: '',
        url: '',
        desc: '',
        composition: [],
        stat: {},
      };
    }

    return { ...dataSet[apiName], stat: stat ?? {} } as unknown as Item;
  }
}
