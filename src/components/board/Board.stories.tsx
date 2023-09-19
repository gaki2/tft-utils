import type { Meta, StoryObj } from '@storybook/react';
import { Board, ChampionData } from './Board';

const meta = {
  title: 'Example/Board',
  component: Board,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Board>;

export default meta;
type Story = StoryObj<typeof meta>;

const MOCK_DATA: ChampionData[] = [
  {
    position: {
      row: 3,
      col: 4,
    },
    champion: 'TFT9_Gangplank',
  },
];

const Boards = () => {
  return <Board champions={MOCK_DATA} season={'season_9b'} language={'ko_kr'} />;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Template: Story = {
  render: () => <Boards />,
};
