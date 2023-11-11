import type { Meta } from '@storybook/react';
import { TraitBadge } from './TraitBadge';
import styled from 'styled-components';
import { LanguageType, Season } from '../../../types';
import { TraitGetter, TraitName } from '../../../getter/trait_getter';

const meta = {
  title: 'Example/Badge/Trait',
  component: TraitBadge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TraitBadge>;

export default meta;

let id = 0;

const TraitView = <S extends Season, L extends LanguageType>({
  traitNames,
  season,
  language,
}: {
  traitNames: TraitName<S, L>[];
  season: S;
  language: L;
}) => {
  return (
    <Wrapper>
      {traitNames.map((name) => (
        <TraitBadge key={`${name}-${++id}`} name={name} season={season} lang={language} />
      ))}
    </Wrapper>
  );
};

export const Season_9 = {
  render: () => {
    const traitGetter = new TraitGetter('season_9', 'ko');
    const traits = traitGetter.getAllTraitNames();
    return <TraitView traitNames={traits} season={'season_9'} language={'ko'} />;
  },
};

export const Season_9b = {
  render: () => {
    const traitGetter = new TraitGetter('season_9b', 'ko');
    const traits = traitGetter.getAllTraitNames();
    return <TraitView traitNames={traits} season={'season_9b'} language={'ko'} />;
  },
};

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
