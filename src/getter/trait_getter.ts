import { Season } from '../types';
import { TraitData_10, traits_season_10 } from '../_generated/season_10/traits_season_10';

export class TraitGetter {
  static getTraitDataFromName(name: string, season: Season) {
    switch (season) {
      case 'season_10':
        const target = (Object.keys(traits_season_10) as (keyof typeof traits_season_10)[]).find(
          (apiName) => {
            return apiName.includes(name);
          }
        );

        if (!target) {
          return null;
        }

        return traits_season_10[target] as TraitData_10;
    }
  }

  static getTraitApiNameFromDisplayName(displayName: string, season: Season) {
    switch (season) {
      case 'season_10':
        const target = (Object.keys(traits_season_10) as (keyof typeof traits_season_10)[]).find(
          (apiName) => {
            return (
              traits_season_10[apiName].name.ko === displayName ||
              traits_season_10[apiName].name.en === displayName
            );
          }
        );

        if (!target) {
          return null;
        }

        return target;
    }
  }
}
