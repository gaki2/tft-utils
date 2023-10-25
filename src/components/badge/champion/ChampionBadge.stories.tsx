import type { Meta } from '@storybook/react';
import { ChampionBadge } from './ChampionBadge';
import styled from 'styled-components';
import { ChampionName, Season } from '../../../types';
import { getAllChampionNames } from '../../../getter';

const meta = {
  title: 'Example/Badge/Champion',
  component: ChampionBadge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChampionBadge>;

export default meta;

let id = 0;

const ChampionView = ({
  championNames,
  season,
}: {
  championNames: ChampionName[];
  season: Season;
}) => {
  return (
    <Wrapper>
      {championNames.map((name) => (
        <ChampionBadge key={`${name}-${++id}`} championName={name} season={season} />
      ))}
    </Wrapper>
  );
};

export const Season_9 = {
  render: () => {
    const championNames = getAllChampionNames('season_9', 'ko', true);
    return <ChampionView championNames={championNames} season={'season_9'} />;
  },
};

export const Season_9b = {
  render: () => {
    const championNames = getAllChampionNames('season_9b', 'ko', true);
    return <ChampionView championNames={championNames} season={'season_9b'} />;
  },
};

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
