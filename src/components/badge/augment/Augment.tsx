import { LanguageType, Season } from '../../../types';
import styled from 'styled-components';
import { AugmentMap } from '../../../types/augment';
import { getAugmentData } from '../../../augment_getter';
import { TFT_Tooltip } from '../../../utils/components/TFT_Tooltip';
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
      <TFT_Tooltip id={tooltipId} title={augName} titleImgUrl={url} bodyText={description} />
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

  max-width: var(--width);
`;

const TooltipTitleImg = styled.img`
  width: var(--img-width);
  height: var(--img-height);
  object-fit: cover;
`;
