import { Season } from '../types';
import { ItemData_10, items_season_10 } from '../_generated/season_10/items_season_10';

export class ItemGetter {
  static getItemDataFromName(name: string, season: Season) {
    switch (season) {
      case 'season_10':
        const target = (Object.keys(items_season_10) as (keyof typeof items_season_10)[]).find(
          (apiName) => {
            return apiName.includes(name);
          }
        );

        if (!target) {
          return null;
        }

        return items_season_10[target] as ItemData_10;
    }
  }
}
