import { LanguageType } from '../../../types';
import { TraitData_10 } from '../../../_generated/season_10/traits_season_10';
import { getTraitIconUrl10 } from './trait_utils';

type UseTraitBadge10Props = TraitData_10 & {
  lang: LanguageType;
};

export const useTraitBadge10 = (props: UseTraitBadge10Props) => {
  const { lang, apiName, name, icon } = props;

  const url = getTraitIconUrl10(icon ?? '');

  return {
    apiName: apiName ?? '',
    name: name[lang] ?? '',
    url,
    lang,
  };
};
