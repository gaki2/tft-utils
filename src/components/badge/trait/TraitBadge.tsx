import { Season } from '../../../types/seasonType';
import { LanguageType } from '../../../types/config';
import { TraitNameMap } from '../../../types/trait';
import { getTraitData } from '../../../trait_getter';
import { useMemo } from 'react';
import styled from 'styled-components';
import { Tooltip } from '../../../utils/components/Tooltip';
import { underBarToSpace } from '../../../utils/regex';

export type TraitBadgeProps<T extends Season> = {
  season: T;
  name: TraitNameMap[T];
  /**
   * @default 'ko'
   */
  lang?: LanguageType;
  /**
   * @default false
   */
  disableTooltip?: boolean;
};

let id = 0;

export const TraitBadge = <T extends Season>({
  season,
  name,
  lang = 'ko',
  disableTooltip = false,
}: TraitBadgeProps<T>) => {
  const { name: traitName, apiName, url } = getTraitData({ season, lang, name });
  const tooltipId = useMemo(() => `${apiName}-${++id}`, [apiName]);

  return (
    <>
      <Wrapper data-tooltip-id={tooltipId}>
        <Img src={url} alt={traitName} />
      </Wrapper>
      <Tooltip id={tooltipId} tooltipProps={{ hidden: disableTooltip }}>
        <TooltipWrapper>
          <TooltipTitle>
            <TooltipTitleText>{underBarToSpace(traitName)}</TooltipTitleText>
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
