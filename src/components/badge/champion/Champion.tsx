import { Season } from 'src/types/seasonType';
import { ChampionNameMap } from '../../../types/champion';
import { LanguageType } from '../../../types';
import styled from 'styled-components';
import { getChampionData } from '../../../getter';
import { useMemo } from 'react';
import { TFT_Tooltip } from '../../../utils/components/TFT_Tooltip';

export type ChampionBadgeProps<T extends Season> = {
  season: T;
  championName: ChampionNameMap[T];
  /**
   * @default 'ko'
   */
  lang?: LanguageType;
};

let id = 0;

export const Champion = <T extends Season>({
  season,
  lang,
  championName,
}: ChampionBadgeProps<T>) => {
  const { name, apiName, url, cost, traits } = getChampionData(championName, season, lang);
  const tooltipId = useMemo(() => `${apiName}-${++id}`, [apiName]);
  return (
    <>
      <Wrapper data-tooltip-id={tooltipId}>
        <Img src={url} alt={name} cost={cost} />
        <Border cost={cost} />
      </Wrapper>
      <TFT_Tooltip id={tooltipId} title={name} titleImgUrl={url} />
    </>
  );
};

const Wrapper = styled.div`
  width: 32px;
  height: 32px;
  display: inline-block;
  position: relative;
`;

const Img = styled.img<{ cost: number }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Border = styled.div<{ cost: number }>`
  --1_cost_border: rgb(128, 128, 128);
  --2_cost_border: rgb(17, 178, 136);
  --3_cost_border: rgb(32, 122, 199);
  --4_cost_border: rgb(196, 64, 218);
  --5_cost_border: rgb(255, 185, 59);

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border: 2px solid ${({ cost }) => `var(--${cost}_cost_border)`};
  border-radius: 4px;
`;
