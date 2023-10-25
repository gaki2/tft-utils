import type { Meta } from '@storybook/react';
import { AugmentBadge } from './AugmentBadge';
import styled from 'styled-components';
import { Season } from '../../../types';
import { AugmentName } from '../../../types/augment';
import { getAugments } from '../../../augment_getter';

const meta = {
  title: 'Example/Badge/Augment',
  component: AugmentBadge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AugmentBadge>;

export default meta;

const AugmentsView = ({
  augmentNames,
  season,
}: {
  augmentNames: AugmentName[];
  season: Season;
}) => {
  return (
    <Wrapper>
      {augmentNames.map((name) => (
        <AugmentBadge key={name} name={name} season={season} />
      ))}
    </Wrapper>
  );
};

export const Season_9 = {
  render: () => {
    const augments = getAugments('season_9', 'ko');
    const augmentNames = Object.values(augments).map((augment) => augment.name) as AugmentName[];
    return <AugmentsView augmentNames={augmentNames} season={'season_9'} />;
  },
};

export const Season_9b = {
  render: () => {
    const augments = getAugments('season_9b', 'ko');
    const augmentNames = Object.values(augments).map((augment) => augment.name) as AugmentName[];
    return <AugmentsView augmentNames={augmentNames} season={'season_9b'} />;
  },
};

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
