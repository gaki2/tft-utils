import { AugmentData_9b } from '../../../_generated/season_9b/augments_season_9b';
import { LanguageType } from '../../../types';
import { useMemo } from 'react';
import { SEASON_9B_BASEURL } from '../../../environments/urls';
import { ToDotPng, ToLowerCase } from '../../../utils/regex';
import { GeneralParser } from '../../../script/parser/generalParser';

type UseAugmentBadge9bProps = AugmentData_9b & {
  lang: LanguageType;
};

export const useAugmentBadge9b = (props: UseAugmentBadge9bProps) => {
  const { apiName, name, desc, lang, icon, effects } = props;

  const url = useMemo(() => {
    return icon ? `${SEASON_9B_BASEURL}/${ToLowerCase(ToDotPng(icon))}` : '';
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
