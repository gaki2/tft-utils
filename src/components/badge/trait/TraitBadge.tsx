import { Season } from '../../../types/seasonType';
import { LanguageType } from '../../../types/config';
import { useMemo } from 'react';
import styled from 'styled-components';
import { Tooltip } from '../../../utils/components/Tooltip';
import { underBarToSpace } from '../../../utils/regex';
import { CommonBadgeProps } from '../common_props_type';
import { TraitGetter, TraitName } from '../../../getter/trait_getter';

export type TraitBadgeProps<S extends Season, L extends LanguageType> = {
  season: S;
  name: TraitName<S, L>;
  /**
   * @default 'ko'
   */
  lang: L;
  /**
   * @default false
   */
  disableTooltip?: boolean;
} & CommonBadgeProps;

let id = 0;

export const TraitBadge = <S extends Season, L extends LanguageType>({
  season,
  name,
  lang,
  disableTooltip = false,
  style,
}: TraitBadgeProps<S, L>) => {
  const traitGetter = useMemo(() => new TraitGetter(season, lang), [season, lang]);
  const { name: traitName, apiName, url } = traitGetter.getDataFromName(name);
  const tooltipId = useMemo(() => `${apiName}-${++id}`, [apiName]);
  const title = underBarToSpace(traitName);
  return (
    <>
      <Wrapper data-tooltip-id={tooltipId} style={style}>
        <Img src={url} alt={traitName} />
      </Wrapper>
      <Tooltip id={tooltipId} tooltipProps={{ hidden: disableTooltip }}>
        <TooltipWrapper>
          <TooltipTitle>
            <TooltipTitleText>{title}</TooltipTitleText>
          </TooltipTitle>
        </TooltipWrapper>
      </Tooltip>
    </>
  );
};

const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #222;
  vertical-align: middle;
`;

const Img = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
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

const TooltipTitleText = styled.span`
  font-size: 0.85rem;
  line-height: 1rem;
  color: var(--font-color);
  align-self: center;
`;
