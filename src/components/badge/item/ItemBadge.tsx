import { LanguageType, Season } from '../../../types';
import { ItemMap } from '../../../types/item';
import { getItemData, getItemDataByApiName } from '../../../item_getter';
import styled from 'styled-components';
import { useMemo } from 'react';
import { Tooltip } from '../../../utils/components/Tooltip';
import { CommonBadgeProps } from '../common_props_type';
import { underBarToSpace } from '../../../utils/regex';

export type ItemBadgeProps<T extends Season> = {
  season: T;
  itemName: ItemMap[T];
  /**
   * @default 'ko'
   */
  lang?: LanguageType;
} & CommonBadgeProps;

let id = 0;

export const ItemBadge = <T extends Season>({
  season,
  itemName,
  lang = 'ko',
  style,
}: ItemBadgeProps<T>) => {
  const { url, name, desc, composition, apiName } = getItemData({ season, lang, name: itemName });
  const tooltipId = useMemo(() => `${apiName}-${++id}`, [apiName]);
  const title = underBarToSpace(name);
  const compositionDataUrls: string[] = useMemo(() => {
    if (composition && composition.length > 0) {
      return composition.map((element) => {
        const { url } = getItemDataByApiName({ apiName: element, lang, season });
        return url;
      });
    }
    return [];
  }, [composition, lang, season]);

  return (
    <>
      <Wrapper data-tooltip-id={tooltipId} style={style}>
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
          {compositionDataUrls.length > 0 && (
            <>
              <Divider />
              <TooltipFooterWrapper>
                <TooltipFooterTitle>조합: </TooltipFooterTitle>
                {compositionDataUrls.map((url, index) => (
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
