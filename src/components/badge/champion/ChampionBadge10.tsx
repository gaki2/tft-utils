import { ChampionName_10 } from '../../../_generated/season_10/champions_season_10';
import { LanguageType } from '../../../types';
import { CommonBadgeProps } from '../common_props_type';
import { ChampionGetter } from '../../../getter/champion_getter';
import { ErrorBadge } from '../ErrorBadge';
import { useChampionBadge10 } from './useChampionBadge10';
import { ChampionBadge } from './ChampionBadge';

export type ChampionBadge10Props = {
  name: ChampionName_10;
  /**
   * @default 'ko'
   */
  lang?: LanguageType;
} & CommonBadgeProps;

export const ChampionBadge10 = (props: ChampionBadge10Props) => {
  const { name, lang = 'ko', ...rest } = props;
  const championData = ChampionGetter.getChampionDataFromName(name, 'season_10');

  if (!championData) {
    return <ErrorBadge errorText={`${name}: 챔피언 이름이 잘못되었습니다.`} />;
  }

  const badgeProps = useChampionBadge10({ ...championData, lang });

  return <ChampionBadge {...badgeProps} {...rest} />;
};
