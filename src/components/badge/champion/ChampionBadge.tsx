import { type LanguageType, Season } from '../../../types';
import styled from 'styled-components';
import React, { useMemo } from 'react';
import { Tooltip } from '../../../ui/tooltip/Tooltip';
import { CommonBadgeProps } from '../common_props_type';
export type ChampionBadgeProps = React.PropsWithChildren<
  {
    season: Season;
    lang: LanguageType;
    name: string;
    apiName: string;
    url: string;
    cost: number;
    traits: string[];
  } & CommonBadgeProps
>;

let id = 0;

export const ChampionBadge = (props: ChampionBadgeProps) => {
  const { apiName, name, children, url, style, cost } = props;
  const tooltipId = useMemo(() => `${apiName}-${++id}`, [apiName]);

  return (
    <>
      <Wrapper data-tooltip-id={tooltipId} style={style}>
        <Img src={url} alt={name} cost={cost} />
        <Border cost={cost} />
      </Wrapper>
      <Tooltip id={tooltipId}>{children}</Tooltip>
    </>
  );
};

const Wrapper = styled.div`
  width: 34px;
  height: 34px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  overflow: hidden;
  font-size: 10px;

  user-select: none;
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
