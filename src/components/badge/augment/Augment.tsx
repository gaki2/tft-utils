import { LanguageType, Season } from '../../../types';
import styled from 'styled-components';
import { AugmentMap } from '../../../types/augment';
import { getAugmentData } from '../../../augment_getter';

export type AugmentProps<T extends Season> = {
  season: T;
  name: AugmentMap[T];
  lang?: LanguageType;
};

export const Augment = <T extends Season>({ season, name, lang = 'ko' }: AugmentProps<T>) => {
  const augmentData = getAugmentData({ season, lang, name });

  return (
    <Wrapper>
      <Img src={augmentData.url} alt={augmentData.name}></Img>
    </Wrapper>
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
