import { LanguageType } from '../../../types';
import { TraitData_10 } from '../../../_generated/season_10/traits_season_10';
import { PBE } from '../../../environments/urls';
import { ToDotPng, ToLowerCase } from '../../../utils/regex';

type UseTraitBadge10Props = TraitData_10 & {
  lang: LanguageType;
};

export const useTraitBadge10 = (props: UseTraitBadge10Props) => {
  const { lang, apiName, name, icon } = props;

  const url = icon ? `${PBE}/${ToLowerCase(ToDotPng(icon ?? ''))}` : '';

  return {
    apiName: apiName ?? '',
    name: name[lang] ?? '',
    url,
    lang,
  };
};
