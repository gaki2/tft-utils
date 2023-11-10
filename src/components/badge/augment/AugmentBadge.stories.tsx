import type { Meta } from '@storybook/react';
import { AugmentBadge } from './AugmentBadge';
import styled from 'styled-components';
import { LanguageType, Season } from '../../../types';
import { AugmentGetter, AugmentName } from '../../../augment_getter';

const meta = {
  title: 'Example/Badge/Augment',
  component: AugmentBadge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AugmentBadge>;

export default meta;

let key = 0;

const AugmentsView = <S extends Season, L extends LanguageType>({
  augmentNames,
  season,
  language,
}: {
  augmentNames: AugmentName<S, L>[];
  season: S;
  language: L;
}) => {
  return (
    <Wrapper>
      {augmentNames.map((name) => (
        <AugmentBadge key={`${name}-${++key}`} lang={language} name={name} season={season} />
      ))}
    </Wrapper>
  );
};

export const Season_9 = {
  render: () => {
    const augmentGetter = new AugmentGetter('season_9', 'ko');
    const augments = augmentGetter.getAllAugmentNames();
    return <AugmentsView season={'season_9'} language={'ko'} augmentNames={augments} />;
  },
};

export const Season_9b = {
  render: () => {
    const augmentGetter = new AugmentGetter('season_9b', 'ko');
    const augments = augmentGetter.getAllAugmentNames();
    return <AugmentsView season={'season_9b'} language={'ko'} augmentNames={augments} />;
  },
};

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
