import { LanguageType } from '../../../types/config';
import { useMemo } from 'react';
import styled from 'styled-components';
import { Tooltip } from '../../../utils/components/Tooltip';
import { CommonBadgeProps } from '../common_props_type';

export type TraitBadgeProps = {
  name: string;
  apiName: string;
  url: string;
  lang: LanguageType;
  disableTooltip?: boolean;
} & CommonBadgeProps;

let id = 0;

export const TraitBadge = ({
  name,
  apiName,
  url,
  lang,
  disableTooltip = false,
  style,
}: TraitBadgeProps) => {
  const tooltipId = useMemo(() => `${apiName}-${++id}`, [apiName]);

  return (
    <>
      <Wrapper lang={lang} data-tooltip-id={tooltipId} style={style}>
        <Img src={url} alt={apiName} />
      </Wrapper>
      <Tooltip id={tooltipId} tooltipProps={{ hidden: disableTooltip }}>
        <TooltipWrapper>
          <TooltipTitle>
            <TooltipTitleText>{name}</TooltipTitleText>
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
  overflow: hidden;
  font-size: 10px;
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
