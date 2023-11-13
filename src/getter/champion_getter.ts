import { Season } from '../types';
import { ChampionData_10, champions_season_10 } from '../_generated/season_10/champions_season_10';

export class ChampionGetter {
  /**
   * 이 함수는 인터페이스에 노출되는 함수가 아니라서, name 의 타입을 강력하게 제한하지 않았다.
   * 강력하게 제한 한다는 뜻은, name 의 타입을 챔피언 이름의 유니온 타입이 되도록 한다는 것이다.
   *
   * 제한을 느슨하게 함으로써, 아래 함수는 어디에서든지 사용될 수 있다는 이점이 있다.
   * 타입에러를 추론하지 못하는 만큼 리턴 타입에 명시적으로 nullable 을 사용하여 사용처에서 예외처리를 하도록 만들었다.
   */
  static getChampionDataFromName(name: string, season: Season) {
    switch (season) {
      case 'season_10':
        const target = (
          Object.keys(champions_season_10) as (keyof typeof champions_season_10)[]
        ).find((apiName) => {
          return apiName === `TFT10_${name}`;
        });

        if (!target) {
          return null;
        }

        return champions_season_10[target] as ChampionData_10;
    }
  }
}
