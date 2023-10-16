import { LanguageType, Season } from '../../../types';
import { ItemMap } from '../../../types/item';
import { getItemData, getItemDataByApiName } from '../../../item_getter';
import styled from 'styled-components';
import { CSSProperties, useMemo } from 'react';
import { TFT_Tooltip } from '../../../utils/components/TFT_Tooltip';

export type ItemProps<T extends Season> = {
  season: T;
  itemName: ItemMap[T];
  lang?: LanguageType;
};

let id = 0;

export const Item = <T extends Season>({ season, itemName, lang = 'ko' }: ItemProps<T>) => {
  const { url, name, desc, composition, apiName } = getItemData({ season, lang, name: itemName });
  const tooltipId = useMemo(() => `${apiName}-${++id}`, [apiName]);

  const compositionDataUrls: string[] = useMemo(() => {
    if (composition && composition.length > 0) {
      return composition.map((element) => {
        const { url } = getItemDataByApiName({ apiName: element, lang, season });
        return url;
      });
    }
    return [];
  }, [composition, lang, season]);

  const tooltipStyle: CSSProperties = {
    padding: '8px',
  };

  return (
    <>
      <Wrapper data-tooltip-id={tooltipId}>
        <Img src={url} alt={name}></Img>
      </Wrapper>
      <TFT_Tooltip
        id={tooltipId}
        title={name}
        titleImgUrl={url}
        bodyText={desc}
        hideFooter={compositionDataUrls.length === 0}
        footerText={'조합 :'}
        footerImgUrls={compositionDataUrls}
        tooltipProps={{ style: tooltipStyle }}
      />
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

const TooltipDescription = styled.div`
  font-size: 0.875rem;
  color: var(--font-color);
`;

const TooltipCompositionWrapper = styled.div<{ hidden: boolean }>`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  flex-direction: row;
  align-items: center;
`;

const TooltipCompositionTitle = styled.span`
  font-size: 0.875rem;
  color: var(--font-color);
`;

const TooltipCompositionImg = styled.img`
  width: var(--composition-img-width);
  height: var(--composition-img-height);
  object-fit: cover;
  margin-left: 6px;
`;
