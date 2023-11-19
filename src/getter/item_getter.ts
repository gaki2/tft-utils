import { Season } from '../types';
import { ItemData_9b, items_season_9b } from '../_generated/season_9b/items_season_9b';

export class ItemGetter {
  static getItemDataFromName(name: string, season: Season) {
    switch (season) {
      case 'season_9b':
        const target = (Object.keys(items_season_9b) as (keyof typeof items_season_9b)[]).find(
          (apiName) => {
            return apiName.includes(name);
          }
        );

        if (!target) {
          return null;
        }

        return items_season_9b[target] as ItemData_9b;
    }
  }
}
