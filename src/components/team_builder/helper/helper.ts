import { LanguageType, Season } from '../../../types';
import { ChampionGetter } from '../../../getter/champion_getter';
import { SEASON_10_BASEURL } from '../../../environments/urls';
import { ToDotPng, ToLowerCase } from '../../../utils/regex';

export const championUrlHelper = (tileIcon: string, season: Season) => {
  if (season === 'season_10') {
    return `${SEASON_10_BASEURL}/${ToLowerCase(ToDotPng(tileIcon))}`;
  } else {
    console.error(`${season}: 시즌이 유효하지 않습니다.`);
    return '';
  }
};

/**
 * 챔피언 이름으로 챔피언 데이터를 가져오는 함수.
 * 보드 내에서 챔피언을 추가할때 챔피언 데이터를 가져오는 용도로 사용함
 */
export const getChampionDetailDataFromName = ({
  name,
  season,
  lang,
}: {
  name: string;
  season: Season;
  lang: LanguageType;
}) => {
  const championData = ChampionGetter.getChampionDataFromName(name, season);

  if (!championData) {
    console.error(`${name} 유효하지 않은 챔피언 이름`);
    return null;
  }

  const { name: championNameMap, apiName, cost, traits, tileIcon } = championData;
  if (!championNameMap) {
    console.log(name);
  }
  return {
    name: championNameMap?.[lang] ?? '',
    apiName: apiName ?? '',
    cost: cost ?? 0,
    traits: traits?.[lang]?.filter((trait): trait is string => Boolean(trait)) ?? [],
    url: championUrlHelper(tileIcon ?? '', season),
  };
};
