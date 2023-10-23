import type { Meta, StoryObj } from '@storybook/react';
import { Trait } from './Trait';
import styled from 'styled-components';
import { Season } from '../../../types';
import { getTraits } from '../../../trait_getter';
import { TraitName } from '../../../types/trait';

const meta = {
  title: 'Example/Trait',
  component: Trait,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Trait>;

export default meta;
type Story = StoryObj<typeof meta>;

let id = 0;

const TraitView = ({ traitNames, season }: { traitNames: TraitName[]; season: Season }) => {
  return (
    <Wrapper>
      {traitNames.map((name) => (
        <Trait key={`${name}-${++id}`} name={name} season={season} />
      ))}
    </Wrapper>
  );
};

export const Season_9: Story = {
  render: () => {
    const traits = getTraits('season_9', 'ko');
    const traitNames = Object.values(traits).map((trait) => trait.name) as TraitName[];
    return <TraitView traitNames={traitNames} season={'season_9'} />;
  },
};

export const Season_9b: Story = {
  render: () => {
    const traits = getTraits('season_9b', 'ko');
    const traitNames = Object.values(traits).map((trait) => trait.name) as TraitName[];
    return <TraitView traitNames={traitNames} season={'season_9b'} />;
  },
};

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
