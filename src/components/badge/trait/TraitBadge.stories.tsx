import type { Meta } from '@storybook/react';
import { TraitBadge } from './TraitBadge';
import styled from 'styled-components';
import { Season } from '../../../types';
import { getTraits } from '../../../trait_getter';
import { TraitName } from '../../../types/trait';

const meta = {
  title: 'Example/Badge/Trait',
  component: TraitBadge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TraitBadge>;

export default meta;

let id = 0;

const TraitView = ({ traitNames, season }: { traitNames: TraitName[]; season: Season }) => {
  return (
    <Wrapper>
      {traitNames.map((name) => (
        <TraitBadge key={`${name}-${++id}`} name={name} season={season} />
      ))}
    </Wrapper>
  );
};

export const Season_9 = {
  render: () => {
    const traits = getTraits('season_9', 'ko');
    const traitNames = Object.values(traits).map((trait) => trait.name) as TraitName[];
    return <TraitView traitNames={traitNames} season={'season_9'} />;
  },
};

export const Season_9b = {
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
