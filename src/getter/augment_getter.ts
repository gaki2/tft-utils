import { Season } from '../types';
import { AugmentData_9b, augments_season_9b } from '../_generated/season_9b/augments_season_9b';

export class AugmentGetter {
  static getAugmentDataFromName(name: string, season: Season) {
    switch (season) {
      case 'season_9b':
        const target = (
          Object.keys(augments_season_9b) as (keyof typeof augments_season_9b)[]
        ).find((apiName) => {
          return apiName.includes(name);
        });

        if (!target) {
          return null;
        }

        return augments_season_9b[target] as AugmentData_9b;
    }
  }
}
