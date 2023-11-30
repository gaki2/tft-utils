import type { Meta } from '@storybook/react';
import { Board10, BoardChampion10 } from './Board10';

const meta = {
  title: 'Example/Board/Season10',
  component: Board10,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Board10>;

export default meta;

const MOCK_DATA: BoardChampion10[] = [
  {
    name: 'Amumu',
    position: {
      row: 0,
      col: 0,
    },
  },
  {
    name: 'TahmKench',
    position: {
      row: 0,
      col: 1,
    },
  },
  {
    name: 'Sett',
    position: {
      row: 0,
      col: 2,
    },
  },
  {
    name: 'Thresh',
    position: {
      row: 0,
      col: 3,
    },
  },
  {
    name: 'Poppy',
    position: {
      row: 0,
      col: 4,
    },
  },
  {
    name: 'Urgot',
    position: {
      row: 1,
      col: 2,
    },
    starLevel: 3,
  },
  {
    name: 'Samira',
    position: {
      row: 3,
      col: 0,
    },
    starLevel: 3,
    headliner: true,
    headlinerTrait: 'Country',
  },
  {
    name: 'Vex',
    position: {
      row: 3,
      col: 1,
    },
  },
  {
    name: 'Sona',
    position: {
      row: 3,
      col: 2,
    },
  },
];

const Boards = () => {
  return <Board10 champions={MOCK_DATA} language={'ko'} />;
};

export const Template = {
  render: () => <Boards />,
};
