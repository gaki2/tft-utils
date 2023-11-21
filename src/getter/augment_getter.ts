import { Season } from '../types';
import { AugmentData_10, augments_season_10 } from '../_generated/season_10/augments_season_10';

export class AugmentGetter {
  static getAugmentDataFromName(name: string, season: Season) {
    switch (season) {
      case 'season_10':
        const target = (
          Object.keys(augments_season_10) as (keyof typeof augments_season_10)[]
        ).find((apiName) => {
          return apiName.includes(name);
        });

        if (!target) {
          return null;
        }

        return augments_season_10[target] as AugmentData_10;
    }
  }
}
