import { type Season } from '../../../types/seasonType';
import { type LanguageType } from '../../../types';
import styled from 'styled-components';
import { useMemo } from 'react';
import { Tooltip } from '../../../utils/components/Tooltip';
import { TraitBadge } from '../trait/TraitBadge';
import { CommonBadgeProps } from '../common_props_type';
import { underBarToSpace } from '../../../utils/regex';
import { ChampionGetter, ChampionName } from '../../../getter/champion_getter';
import { TraitName } from '../../../getter/trait_getter';

export type ChampionBadgeProps<S extends Season, L extends LanguageType> = {
  season: S;
  championName: ChampionName<S, L>;
  /**
   * @default 'ko'
   */
  lang: L;
} & CommonBadgeProps;

let id = 0;

export const ChampionBadge = <S extends Season, L extends LanguageType>({
  season,
  lang,
  championName,
  style,
}: ChampionBadgeProps<S, L>) => {
  const championGetter = useMemo(() => new ChampionGetter(season, lang), [season, lang]);
  const { name, apiName, url, cost, traits } = championGetter.getDataFromName(championName);
  const tooltipId = useMemo(() => `${apiName}-${++id}`, [apiName]);
  const title = underBarToSpace(name);
  return (
    <>
      <Wrapper data-tooltip-id={tooltipId} style={style}>
        <Img src={url} alt={name} cost={cost} />
        <Border cost={cost} />
      </Wrapper>
      <Tooltip id={tooltipId}>
        <TooltipWrapper>
          <TooltipTitle>
            <TooltipImgWrapper>
              <TooltipTitleImg src={url} alt={name} />
              <TooltipTitleText>{title}</TooltipTitleText>
            </TooltipImgWrapper>
            <TooltipTraitWrapper>
              {(traits as TraitName<S, L>[]).map((trait, index) => (
                <TooltipTraitItemWrapper key={index}>
                  <TraitBadge season={season} lang={lang} name={trait} disableTooltip={true} />
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
  vertical-align: middle;
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
