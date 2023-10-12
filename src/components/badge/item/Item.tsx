import { LanguageType, Season } from '../../../types';
import { ItemMap } from '../../../types/item';
import { getItemData } from '../../../item_getter';
import styled from 'styled-components';
import { useMemo } from 'react';
import { ReactTooltip } from '../../../utils/components/ReactTooltip';

export type ItemProps<T extends Season> = {
  season: T;
  name: ItemMap[T];
  lang?: LanguageType;
};

let id = 0;

export const Item = <T extends Season>({ season, name, lang = 'ko' }: ItemProps<T>) => {
  const itemData = getItemData({ season, lang, name });
  const tooltipId = useMemo(() => `${itemData.name}-${++id}`, [itemData]);

  return (
    <>
      <Wrapper data-tooltip-id={tooltipId}>
        <Img src={itemData.url} alt={itemData.name}></Img>
      </Wrapper>
      <ReactTooltip id={tooltipId}>
        <span>하이</span>
      </ReactTooltip>
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
