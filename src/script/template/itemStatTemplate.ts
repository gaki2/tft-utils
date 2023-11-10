import { LanguageType, Season } from '../../types';

export type ItemStat = 'ad' | 'ap' | 'speed' | 'mr' | 'armor' | 'hp' | 'mana' | 'critical';

export class ItemStatTemplate {
  constructor(private language: LanguageType, private season: Season) {}

  parseItemList(itemListJsonString: string): string[] {
    const itemList = JSON.parse(itemListJsonString).data;

    if (Object.keys(itemList).length === 0) {
      throw new Error('itemList is empty');
    }

    return Object.values<{ id: string }>(itemList).map((value) => {
      const { id } = value;
      return id;
    });
  }

  getEmptyTemplate(itemList: ReturnType<typeof this.parseItemList>) {
    const template = itemList.reduce((acc, item) => {
      acc[item] = {};
      return acc;
    }, {} as { [key: string]: { [key in ItemStat]?: number } });

    return `import { ItemStat } from '../../script/template/itemStatTemplate';
    
    export const item_stat_${
      this.season
    }: { [key: string]: {[key in ItemStat]?: number}} = ${JSON.stringify(template, null, 4)}`;
  }
}
