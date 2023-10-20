import type { Meta, StoryObj } from '@storybook/react';
import { Champion } from './Champion';
import styled from 'styled-components';
import { ChampionName, Season } from '../../../types';
import { getAllChampionNames } from '../../../getter';

const meta = {
  title: 'Example/Champion',
  component: Champion,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Champion>;

export default meta;
type Story = StoryObj<typeof meta>;

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
        <Champion key={`${name}-${++id}`} championName={name} season={season} />
      ))}
    </Wrapper>
  );
};

export const Season_9: Story = {
  render: () => {
    const championNames = getAllChampionNames('season_9', 'ko', true);
    return <ChampionView championNames={championNames} season={'season_9'} />;
  },
};

export const Season_9b: Story = {
  render: () => {
    const championNames = getAllChampionNames('season_9b', 'ko', true);
    console.log(championNames);
    return <ChampionView championNames={championNames} season={'season_9b'} />;
  },
};

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
