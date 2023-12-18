import { LanguageType } from '../../../types';
import styled from 'styled-components';
import { Tooltip } from '../../../ui/tooltip/Tooltip';
import { useMemo } from 'react';
import { CommonBadgeProps } from '../common_props_type';

export type AugmentBadgeProps = {
  apiName: string;
  name: string;
  url: string;
  desc: string;
  lang: LanguageType;
} & CommonBadgeProps;

let id = 0;

export const AugmentBadge = ({ apiName, name, url, desc, lang, style }: AugmentBadgeProps) => {
  const tooltipId = useMemo(() => `${apiName}-${++id}`, [apiName]);

  return (
    <>
      <Wrapper lang={lang} data-tooltip-id={tooltipId} style={style}>
        <Img src={url} alt={apiName}></Img>
      </Wrapper>
      <Tooltip id={tooltipId}>
        <TooltipWrapper>
          <TooltipTitle>
            <TooltipTitleImg src={url} alt={name} />
            <TooltipTitleText>{name}</TooltipTitleText>
          </TooltipTitle>
          <Divider />
          <TooltipBody dangerouslySetInnerHTML={{ __html: desc }} />
        </TooltipWrapper>
      </Tooltip>
    </>
  );
};

const Wrapper = styled.div`
  width: 32px;
  height: 32px;
  display: inline-block;
  vertical-align: middle;
  // image 로드가 실패했을때 alt text 가 badge 밖으로 나가지 않도록.
  overflow: hidden;
  font-size: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

const TooltipTitleImg = styled.img`
  width: var(--img-width);
  height: var(--img-height);
  object-fit: cover;
`;

const TooltipTitleText = styled.span`
  font-size: 1rem;
  line-height: 1.25rem;
  color: var(--font-color);
  align-self: center;
`;

const Divider = styled.hr`
  width: 100%;
  border-width: 0.5px;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

const TooltipBody = styled.div`
  font-size: 0.875rem;
  color: var(--font-color);
`;
