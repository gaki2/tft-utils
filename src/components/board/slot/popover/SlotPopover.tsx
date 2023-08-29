import { Season } from '@src/static/types/seasonType';
import { LanguageType } from '@src/script/config';
import { ChampionName } from '@src/static/types/championType';
import { CSSProperties, useMemo } from 'react';
import { getChampionTraits } from '@src/static/getter';

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

  const championImgDivStyle: CSSProperties = {
    backgroundImage: `url(${traits?.[0].icon ?? ''})`,
    width: '50px',
    height: '50px',
  };

  return (
    <div style={{ backgroundColor: 'black', width: '100px', height: '100px', display: 'flex' }}>
      <div style={championImgDivStyle} />
    </div>
  );
};
