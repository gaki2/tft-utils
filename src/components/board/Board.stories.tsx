import type { Meta, StoryObj } from '@storybook/react';
import { Board } from './Board';
import { ChampionNode } from './class/Board';

const meta = {
  title: 'Example/Board',
  component: Board,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Board>;

export default meta;
type Story = StoryObj<typeof meta>;

const MOCK_DATA: ChampionNode[] = [
  {
    position: {
      row: 2,
      col: 2,
    },
    name: '진',
  },
  {
    position: {
      row: 2,
      col: 3,
    },
    name: '갱플랭크',
  },
];

const Boards = () => {
  return <Board champions={MOCK_DATA} season={'season_9b'} language={'ko'} />;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Template: Story = {
  render: () => <Boards />,
};
