import { Season } from '../../../_generated/types/seasonType';
import { LanguageType } from '../../../script/config';
import { useMemo } from 'react';
import { ChampionName } from '../../../_generated/types/championType';
import { getChampionDisplayName, getChampionTraits, getCost } from '../../../_generated/getter';
import { ChampionImageView } from './ChampionImageView';
import { TraitsView } from './TraitsView';
import { CostView } from './CostView';
import {S3} from "../../../environments/urls";

type SlotPopupProps = {
  championName: ChampionName;
  season: Season;
  language: LanguageType;
};

export const SlotPopup = ({ championName, season, language }: SlotPopupProps) => {
  const traits = useMemo(() => {
    if (championName) {
      return getChampionTraits(championName, season, language);
    }
    return null;
  }, [championName, season, language]);

  const championImageUrl = useMemo(() => {
    return `url(${S3}/${season}/champions/${championName}.png)`;
  }, [championName, season]);

  const championCost = useMemo(() => {
    return getCost(championName, season);
  }, [championName, season]);

  const championDisplayName = useMemo(() => {
    return getChampionDisplayName(championName, season, language);
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
      className='no_flex_shrink'>
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
