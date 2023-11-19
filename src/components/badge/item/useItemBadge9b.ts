import { ItemData_9b } from '../../../_generated/season_9b/items_season_9b';
import { LanguageType } from '../../../types';
import { useMemo } from 'react';
import { GeneralParser } from '../../../script/parser/generalParser';
import {
  removeAngleBracket,
  removePercent,
  removeZWSP,
  ToDotPng,
  ToLowerCase,
} from '../../../utils/regex';
import { ItemGetter } from '../../../getter/item_getter';
import { SEASON_9B_BASEURL } from '../../../environments/urls';

type UseItemBadge9bProps = ItemData_9b & {
  lang: LanguageType;
};

export const useItemBadge9b = (props: UseItemBadge9bProps) => {
  const { apiName, name, lang, desc, effects, composition, icon } = props;

  const parsedDesc = useMemo(() => {
    const matchedDesc = desc[lang] ?? '';
    return GeneralParser.replaceVariables(
      GeneralParser.applyRegex(matchedDesc, removeZWSP, removePercent, removeAngleBracket),
      effects
    );
  }, [lang, apiName]);

  const compositionUrls = useMemo(() => {
    if (!composition || !composition.length) {
      return [];
    }
    return composition
      .map((item) => {
        const itemUrl = ItemGetter.getItemDataFromName(item ?? '', 'season_9b')?.icon;
        if (!itemUrl) {
          return '';
        }
        return `${SEASON_9B_BASEURL}/${ToLowerCase(ToDotPng(itemUrl ?? ''))}`;
      })
      .filter(Boolean);
  }, [apiName]);

  const url = icon ? `${SEASON_9B_BASEURL}/${ToLowerCase(ToDotPng(icon ?? ''))}` : '';

  return {
    apiName: apiName ?? '',
    name: name[lang] ?? '',
    desc: parsedDesc,
    url,
    compositionUrls,
    stat: effects,
    lang,
  };
};
