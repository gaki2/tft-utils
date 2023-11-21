import { ChampionData_10 } from '../../../_generated/season_10/champions_season_10';
import { LanguageType, Season } from '../../../types';
import { useMemo } from 'react';
import { ToDotPng, ToLowerCase } from '../../../utils/regex';
import { SEASON_10_BASEURL } from '../../../environments/urls';

type UseChampionBadge10Props = {
  lang: LanguageType;
} & ChampionData_10;

export const useChampionBadge10 = (props: UseChampionBadge10Props) => {
  const { lang, apiName, name, cost, traits, tileIcon } = props;

  const url = useMemo(
    () => (tileIcon ? `${SEASON_10_BASEURL}/${ToLowerCase(ToDotPng(tileIcon))}` : ''),
    [tileIcon]
  );

  const championName = useMemo(() => name[lang] ?? '', [name, lang]);

  const championCost = useMemo(() => cost ?? 0, [cost]);

  const championTraits = useMemo(
    () =>
      traits[lang].map((trait) => trait ?? '').filter((trait): trait is string => Boolean(trait)),
    [traits, lang]
  );

  const championApiName = useMemo(() => apiName ?? '', [apiName]);

  return {
    season: 'season_10' as Season,
    lang,
    name: championName,
    apiName: championApiName,
    cost: championCost,
    url,
    traits: championTraits,
  };
};
