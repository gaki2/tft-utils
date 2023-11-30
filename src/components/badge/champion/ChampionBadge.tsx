import { type LanguageType, Season } from '../../../types';
import styled from 'styled-components';
import { useMemo } from 'react';
import { Tooltip } from '../../../utils/components/Tooltip';
import { CommonBadgeProps } from '../common_props_type';
import { underBarToSpace } from '../../../utils/regex';
import { TraitBadge10 } from '../trait/TraitBadge10';
import { TraitGetter } from '../../../getter/trait_getter';

export type ChampionBadgeProps = {
  season: Season;
  lang: LanguageType;
  name: string;
  apiName: string;
  url: string;
  cost: number;
  traits: string[];
} & CommonBadgeProps;

let id = 0;

export const ChampionBadge = ({
  season,
  lang,
  name,
  apiName,
  url,
  cost,
  traits,
  style,
}: ChampionBadgeProps) => {
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
              {traits.map((trait, index) => (
                <TooltipTraitItemWrapper key={index}>
                  <TraitBadge10
                    season={season}
                    lang={lang}
                    // trait 이 displayName 이라서, apiName 으로 바꿔줘야함. 하지만 그 과정에서 타입이 string 으로 꼬여서 발생하는 타입에러임.
                    name={TraitGetter.getTraitApiNameFromDisplayName(trait, season)}
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
  width: 34px;
  height: 34px;
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
  align-items: center;
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
