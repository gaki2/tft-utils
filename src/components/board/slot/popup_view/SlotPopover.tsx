import { Season } from '@src/static/types/seasonType';
import { LanguageType } from '@src/script/config';
import { ChampionName } from '@src/static/types/championType';
import { useMemo } from 'react';
import { getChampionName, getChampionTraits, getCost } from '@src/static/getter';
import { TraitsView } from '@src/components/board/slot/popup_view/TraitsView';
import { ChampionImageView } from '@src/components/board/slot/popup_view/ChampionImageView';
import { CostView } from '@src/components/board/slot/popup_view/CostView';
import styles from './SlotPopover.module.css';

type SlotPopoverProps = {
  championName: ChampionName;
  season: Season;
  language: LanguageType;
};

export const SlotPopover = ({ championName, season, language }: SlotPopoverProps) => {
  const traits = useMemo(() => {
    if (championName) {
      return getChampionTraits(championName, season, language);
    }
    return null;
  }, [championName, season, language]);

  const championImageUrl = useMemo(() => {
    return `url(/img/${season}/champion/${championName}.png)`;
  }, [championName, season]);

  const championCost = useMemo(() => {
    return getCost(championName, season);
  }, [championName, season]);

  const championDisplayName = useMemo(() => {
    return getChampionName(championName, season, language);
  }, [championName, season, language]);

  return (
    <div
      style={{
        backgroundColor: '#123040',
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        userSelect: 'none',
      }}
      className={styles.no_flex_shrink}>
      <div style={{ display: 'flex', border: '1px solid #3e5a63' }}>
        <ChampionImageView
          championImageUrl={championImageUrl}
          championDisplayName={championDisplayName}
        />
        <TraitsView traits={traits} />
        <CostView championCost={championCost} />
      </div>
    </div>
  );
};
