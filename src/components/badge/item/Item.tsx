import { LanguageType, Season } from '../../../types';
import { ItemMap } from '../../../types/item';
import { getItemData, getItemDataByApiName } from '../../../item_getter';
import styled from 'styled-components';
import { CSSProperties, useMemo } from 'react';
import { ReactTooltip } from '../../../utils/components/ReactTooltip';

export type ItemProps<T extends Season> = {
  season: T;
  itemName: ItemMap[T];
  lang?: LanguageType;
};

let id = 0;

export const Item = <T extends Season>({ season, itemName, lang = 'ko' }: ItemProps<T>) => {
  const { url, name, desc, composition } = getItemData({ season, lang, name: itemName });
  const tooltipId = useMemo(() => `${name}-${++id}`, [name]);

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
      <ReactTooltip id={tooltipId} style={tooltipStyle}>
        {/*itemData.desc 라는 문자열에 있는 <br> 을 렌더링하기 위해서 dangerouslySetInnerHTML 을 사용했다. */}
        {/*<PTag dangerouslySetInnerHTML={{ __html: itemData.desc }}></PTag>*/}
        <TooltipWrapper>
          <TooltipTitle>
            <TooltipTitleImg src={url} alt={name} />
            <TooltipTitleText>{name}</TooltipTitleText>
          </TooltipTitle>
          <Divider />
          <TooltipDescription dangerouslySetInnerHTML={{ __html: desc }} />
          <Divider hidden={compositionDataUrls.length === 0} />
          <TooltipCompositionWrapper hidden={compositionDataUrls.length === 0}>
            <TooltipCompositionTitle>{'조합: '}</TooltipCompositionTitle>
            {compositionDataUrls.map((url, index) => (
              <TooltipCompositionImg key={index} src={url} alt={name} />
            ))}
          </TooltipCompositionWrapper>
        </TooltipWrapper>
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

const TooltipWrapper = styled.div`
  --width: 320px;
  --img-width: 32px;
  --img-height: 32px;
  --font-color: #fff;
  --devider-color: rgba(221, 221, 221, 0.9);
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
