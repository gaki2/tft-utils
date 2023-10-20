import { LanguageType, Season } from '../../../types';
import { ItemMap } from '../../../types/item';
import { getItemData, getItemDataByApiName } from '../../../item_getter';
import styled from 'styled-components';
import { CSSProperties, useMemo } from 'react';
import { TFT_Tooltip } from '../../../utils/components/TFT_Tooltip';

export type ItemProps<T extends Season> = {
  season: T;
  itemName: ItemMap[T];
  /**
   * @default 'ko'
   */
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
        <Img src={url} alt={name} />
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
