import { LanguageType } from '../../../types';
import { useMemo } from 'react';
import {
  applyRegex,
  removeAngleBracket,
  removePercent,
  removeZWSP,
  ToDotPng,
  ToLowerCase,
} from '../../../utils/regex';
import { ItemGetter } from '../../../getter/item_getter';
import { SEASON_10_BASEURL } from '../../../environments/urls';
import { ItemData_10 } from '../../../_generated/season_10/items_season_10';
import { replaceVariables } from '../../../utils/replaceVariables';

type UseItemBadge10Props = ItemData_10 & {
  lang: LanguageType;
};

export const useItemBadge10 = (props: UseItemBadge10Props) => {
  const { apiName, name, lang, desc, effects, composition, icon } = props;

  const parsedDesc = useMemo(() => {
    const matchedDesc = desc[lang] ?? '';
    return replaceVariables(
      applyRegex(matchedDesc, removeZWSP, removePercent, removeAngleBracket),
      effects
    );
  }, [lang, apiName]);

  const compositionUrls = useMemo(() => {
    if (!composition || !composition.length) {
      return [];
    }
    return composition
      .map((item) => {
        const itemUrl = ItemGetter.getItemDataFromName(item ?? '', 'season_10')?.icon;
        if (!itemUrl) {
          return '';
        }
        return `${SEASON_10_BASEURL}/${ToLowerCase(ToDotPng(itemUrl ?? ''))}`;
      })
      .filter(Boolean);
  }, [apiName]);

  const url = icon ? `${SEASON_10_BASEURL}/${ToLowerCase(ToDotPng(icon ?? ''))}` : '';

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
