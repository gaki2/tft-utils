import { type Season } from 'src/types/seasonType';
import { type ChampionNameMap } from '../../../types/champion';
import { type LanguageType } from '../../../types';
import styled from 'styled-components';
import { getChampionData } from '../../../getter';
import { useMemo } from 'react';
import { Tooltip } from '../../../utils/components/Tooltip';
import { TraitBadge } from '../trait/TraitBadge';
import { TraitNameMap } from '../../../types/trait';

export type ChampionBadgeProps<T extends Season> = {
  season: T;
  championName: ChampionNameMap[T];
  /**
   * @default 'ko'
   */
  lang?: LanguageType;
};

let id = 0;

export const ChampionBadge = <T extends Season>({
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
      <Tooltip id={tooltipId}>
        <TooltipWrapper>
          <TooltipTitle>
            <TooltipImgWrapper>
              <TooltipTitleImg src={url} alt={name} />
              <TooltipTitleText>{name}</TooltipTitleText>
            </TooltipImgWrapper>
            <TooltipTraitWrapper>
              {traits.map((trait, index) => (
                <TooltipTraitItemWrapper key={index}>
                  <TraitBadge
                    season={season}
                    name={trait as TraitNameMap[typeof season]}
                    disableTooltip={true}
                  />
                  <span>{trait}</span>
                </TooltipTraitItemWrapper>
              ))}
            </TooltipTraitWrapper>
          </TooltipTitle>
        </TooltipWrapper>
      </Tooltip>
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

const TooltipWrapper = styled.div`
  --width: 320px;
  --img-width: 32px;
  --img-height: 32px;
  --font-color: #fff;
  --composition-img-width: 24px;
  --composition-img-height: 24px;

  max-width: var(--width);
`;

const TooltipTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

const TooltipImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

const TooltipTitleImg = styled.img`
  width: var(--img-width);
  height: var(--img-height);
  object-fit: cover;
`;

const TooltipTitleText = styled.span`
  font-size: 0.75rem;
  color: var(--font-color);
  align-self: center;
`;

const TooltipTraitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const TooltipTraitItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;
