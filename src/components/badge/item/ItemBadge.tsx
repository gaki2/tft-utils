import { LanguageType } from '../../../types';
import styled from 'styled-components';
import { useMemo } from 'react';
import { Tooltip } from '../../../utils/components/Tooltip';
import { CommonBadgeProps } from '../common_props_type';
import { underBarToSpace } from '../../../utils/regex';
import { ItemStat } from './ItemStat';

export type ItemBadgeProps = {
  apiName: string;
  name: string;
  desc: string;
  url: string;
  compositionUrls: string[];
  stat: Record<string, number | null>;
  lang: LanguageType;
} & CommonBadgeProps;

let id = 0;

export const ItemBadge = (props: ItemBadgeProps) => {
  const { apiName, name, desc, url, compositionUrls, stat, lang, ...commonProps } = props;

  const isEmptyStat = Object.keys(stat ?? {}).length === 0;
  const tooltipId = useMemo(() => `${apiName}-${++id}`, [apiName]);

  const title = underBarToSpace(name);

  return (
    <>
      <Wrapper data-tooltip-id={tooltipId} style={commonProps.style}>
        <Img src={url} alt={name} />
      </Wrapper>
      <Tooltip id={tooltipId}>
        <TooltipWrapper>
          <TooltipTitle>
            <TooltipTitleImg src={url} alt={name} />
            <TooltipTitleText>{title}</TooltipTitleText>
          </TooltipTitle>
          <Divider />
          <TooltipBody dangerouslySetInnerHTML={{ __html: desc }} />
          <ItemStat statRecord={stat} lang={lang} />
          {compositionUrls.length > 0 && (
            <>
              <Divider />
              <TooltipFooterWrapper>
                <TooltipFooterTitle>{lang === 'ko' ? '조합' : 'Recipe'}: </TooltipFooterTitle>
                {compositionUrls.map((url, index) => (
                  <TooltipFooterImg key={index} src={url} alt={name} />
                ))}
              </TooltipFooterWrapper>
            </>
          )}
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
  --sub-font-color: #aaa;
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

const ItemStatWrapper = styled.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 0.75rem;
  color: var(--sub-font-color);
`;

const TooltipFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TooltipFooterTitle = styled.span`
  font-size: 0.875rem;
  color: var(--font-color);
`;

const TooltipFooterImg = styled.img`
  width: var(--composition-img-width);
  height: var(--composition-img-height);
  object-fit: cover;
  margin-left: 6px;
`;
