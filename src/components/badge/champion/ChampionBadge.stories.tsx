import type { Meta } from '@storybook/react';
import { ChampionBadge } from './ChampionBadge';
import styled from 'styled-components';
import { LanguageType, Season } from '../../../types';
import { ChampionGetter, ChampionName } from '../../../getter/champion_getter';

const meta = {
  title: 'Example/Badge/Champion',
  component: ChampionBadge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChampionBadge>;

export default meta;

let id = 0;

const ChampionView = <S extends Season, L extends LanguageType>({
  championNames,
  season,
  language,
}: {
  championNames: ChampionName<S, L>[];
  season: S;
  language: L;
}) => {
  return (
    <Wrapper>
      {championNames.map((name) => (
        <ChampionBadge
          key={`${name}-${++id}`}
          championName={name}
          season={season}
          lang={language}
        />
      ))}
    </Wrapper>
  );
};

export const Season_9 = {
  render: () => {
    const championGetter = new ChampionGetter('season_9', 'ko');
    const championNames = championGetter.getAllChampionNames();

    return <ChampionView championNames={championNames} season={'season_9'} language={'ko'} />;
  },
};

export const Season_9b = {
  render: () => {
    const championGetter = new ChampionGetter('season_9b', 'ko');
    const championNames = championGetter.getAllChampionNames();

    return <ChampionView championNames={championNames} season={'season_9b'} language={'ko'} />;
  },
};

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
