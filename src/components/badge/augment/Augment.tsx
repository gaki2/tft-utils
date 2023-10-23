import { LanguageType, Season } from '../../../types';
import styled from 'styled-components';
import { AugmentMap } from '../../../types/augment';
import { getAugmentData } from '../../../augment_getter';
import { Tooltip } from '../../../utils/components/Tooltip';
import { useMemo } from 'react';

export type AugmentProps<T extends Season> = {
  season: T;
  name: AugmentMap[T];
  lang?: LanguageType;
};

let id = 0;

export const Augment = <T extends Season>({ season, name, lang = 'ko' }: AugmentProps<T>) => {
  const { apiName, name: augName, url, description } = getAugmentData({ season, lang, name });
  const tooltipId = useMemo(() => `${apiName}-${++id}`, [apiName]);

  return (
    <>
      <Wrapper lang={lang} data-tooltip-id={tooltipId}>
        <Img src={url} alt={augName}></Img>
      </Wrapper>
      <Tooltip id={tooltipId}>
        <TooltipWrapper>
          <TooltipTitle>
            <TooltipTitleImg src={url} alt={augName} />
            <TooltipTitleText>{augName}</TooltipTitleText>
          </TooltipTitle>
          <Divider />
          <TooltipBody dangerouslySetInnerHTML={{ __html: description }} />
        </TooltipWrapper>
      </Tooltip>
    </>
  );
};

const Wrapper = styled.div`
  width: 32px;
  height: 32px;
  display: inline-block;
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
`;

const TooltipBody = styled.div`
  font-size: 0.875rem;
  color: var(--font-color);
`;
