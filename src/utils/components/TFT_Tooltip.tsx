import { Tooltip } from 'react-tooltip';
import React from 'react';
import styled from 'styled-components';

type TooltipProps = {
  /**
   * id 는 data-tooltip-id 와 동일해야 툴팁과 연결된다.
   */
  id: string;
  title: string;
  titleImgUrl?: string;
  bodyText?: string;
  hideFooter?: boolean;
  footerText?: string;
  footerImgUrls?: string[];
  tooltipProps?: React.ComponentProps<typeof Tooltip>;
};

const useTooltip = (props: TooltipProps) => {
  const {
    title,
    titleImgUrl,
    bodyText,
    footerText,
    footerImgUrls,
    hideFooter: _hideFooter,
  } = props;

  const safeTitleImg = titleImgUrl === undefined ? '' : titleImgUrl;
  const safeBodyText = bodyText === undefined ? '' : bodyText;
  const hideBody = bodyText === undefined;
  const hideFooter = _hideFooter || (footerText === undefined && footerImgUrls === undefined);
  const safeFooterImgUrls = footerImgUrls?.filter(Boolean) ?? [];

  return {
    title,
    safeTitleImg,
    safeBodyText,
    hideBody,
    hideFooter,
    safeFooterImgUrls,
    footerText,
  };
};

export const TFT_Tooltip = (props: TooltipProps) => {
  const { title, safeTitleImg, safeBodyText, hideBody, hideFooter, footerText, safeFooterImgUrls } =
    useTooltip(props);

  return (
    <Tooltip delayShow={0} delayHide={0} {...props.tooltipProps} id={props.id}>
      <TooltipWrapper>
        <TooltipTitle>
          <TooltipTitleImg src={safeTitleImg} alt={title} />
          <TooltipTitleText>{title}</TooltipTitleText>
        </TooltipTitle>
        <Divider hidden={hideBody} />
        {/*itemData.desc 라는 문자열에 있는 <br> 을 렌더링하기 위해서 dangerouslySetInnerHTML 을 사용했다. */}
        {/*<PTag dangerouslySetInnerHTML={{ __html: itemData.desc }}></PTag>*/}
        <TooltipBody hidden={hideBody} dangerouslySetInnerHTML={{ __html: safeBodyText }} />
        <Divider hidden={hideFooter} />
        {!hideFooter && (
          <TooltipFooterWrapper>
            <TooltipFooterTitle>{footerText}</TooltipFooterTitle>
            {safeFooterImgUrls.map((url, index) => (
              <TooltipFooterImg key={index} src={url} />
            ))}
          </TooltipFooterWrapper>
        )}
      </TooltipWrapper>
    </Tooltip>
  );
};

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
`;

const TooltipBody = styled.div`
  font-size: 0.875rem;
  color: var(--font-color);
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
