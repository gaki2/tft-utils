import { LanguageType } from '../../../types';
import { useMemo } from 'react';
import { SEASON_10_BASEURL } from '../../../environments/urls';
import { ToDotPng, ToLowerCase } from '../../../utils/regex';
import { GeneralParser } from '../../../script/parser/generalParser';
import { AugmentData_10 } from '../../../_generated/season_10/augments_season_10';

type UseAugmentBadge10Props = AugmentData_10 & {
  lang: LanguageType;
};

export const useAugmentBadge10 = (props: UseAugmentBadge10Props) => {
  const { apiName, name, desc, lang, icon, effects } = props;

  const url = useMemo(() => {
    return icon ? `${SEASON_10_BASEURL}/${ToLowerCase(ToDotPng(icon))}` : '';
  }, [icon]);

  const parsedDesc = useMemo(() => {
    const matchedDesc = desc[lang];

    if (!matchedDesc) return '';

    return GeneralParser.replaceVariables(matchedDesc, effects);
  }, [lang]);

  return {
    apiName: apiName ?? '',
    name: name[lang] ?? '',
    lang,
    url,
    desc: parsedDesc,
  };
};
