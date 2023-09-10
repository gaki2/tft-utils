import type { Meta, StoryObj } from '@storybook/react';
import { Board, ChampionData } from './Board';

const meta = {
  title: 'Example/Board',
  component: Board,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Board>;

export default meta;
type Story = StoryObj<typeof meta>;

const MOCK_DATA: ChampionData[] = [
  {
    position: {
      row: 0,
      col: 3,
    },
    champion: 'TFT9_Shen',
  },
  {
    position: {
      row: 0,
      col: 0,
    },
    champion: 'TFT9_KSante',
  },
  {
    position: {
      row: 0,
      col: 5,
    },
    champion: 'TFT9_Maokai',
  },
  {
    position: {
      row: 0,
      col: 2,
    },
    champion: 'TFT9_Taric',
  },
  {
    position: {
      row: 3,
      col: 5,
    },
    champion: 'TFT9_Aphelios',
  },
  {
    position: {
      row: 3,
      col: 6,
    },
    champion: 'TFT9_Zeri',
  },
  {
    position: {
      row: 3,
      col: 4,
    },
    champion: 'TFT9_Ashe',
  },
];

const Boards = () => {
  return <Board champions={MOCK_DATA} season={'season_9'} language={'ko_kr'} />;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Template: Story = {
  render: () => <Boards />,
};
