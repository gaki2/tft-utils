import { LanguageType } from '../../../types';
import { TraitData_10 } from '../../../_generated/season_10/traits_season_10';
import { SEASON_10_BASEURL } from '../../../environments/urls';
import { ToDotPng, ToLowerCase } from '../../../utils/regex';

type UseTraitBadge10Props = TraitData_10 & {
  lang: LanguageType;
};

export const useTraitBadge10 = (props: UseTraitBadge10Props) => {
  const { lang, apiName, name, icon } = props;

  const url = icon ? `${SEASON_10_BASEURL}/${ToLowerCase(ToDotPng(icon ?? ''))}` : '';

  return {
    apiName: apiName ?? '',
    name: name[lang] ?? '',
    url,
    lang,
  };
};