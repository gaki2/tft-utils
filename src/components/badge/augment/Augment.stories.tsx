import type { Meta, StoryObj } from '@storybook/react';
import { Augment } from './Augment';
import styled from 'styled-components';
import { ItemName } from '../../../types/item';
import { getItems } from '../../../item_getter';
import { Season } from '../../../types';
import { AugmentName } from '../../../types/augment';
import { getAugments } from '../../../augment_getter';

const meta = {
  title: 'Example/Augment',
  component: Augment,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Augment>;

export default meta;
type Story = StoryObj<typeof meta>;

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
        <Augment key={name} name={name} season={season} />
      ))}
    </Wrapper>
  );
};

export const Season_9: Story = {
  render: () => {
    const augments = getAugments('season_9', 'ko');
    const augmentNames = Object.values(augments).map((augment) => augment.name) as AugmentName[];
    return <AugmentsView augmentNames={augmentNames} season={'season_9'} />;
  },
};

export const Season_9b: Story = {
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
