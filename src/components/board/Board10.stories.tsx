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
    name: 'Ekko',
    position: {
      row: 0,
      col: 5,
    },
    starLevel: 2,
  },
  {
    name: 'Urgot',
    position: {
      row: 0,
      col: 1,
    },
    starLevel: 2,
  },
  {
    name: 'KSante',
    position: {
      row: 0,
      col: 2,
    },
    starLevel: 2,
  },
  {
    name: 'Sett',
    position: {
      row: 0,
      col: 3,
    },
    starLevel: 3,
    headliner: true,
    headlinerTrait: 'PopBand',
  },
  {
    name: 'Yone',
    position: {
      row: 0,
      col: 4,
    },
    starLevel: 2,
  },
  {
    name: 'Aphelios',
    position: {
      row: 3,
      col: 0,
    },
    starLevel: 3,
  },
  {
    name: 'Senna',
    position: {
      row: 3,
      col: 1,
    },
    starLevel: 3,
  },
];

const Boards = () => {
  return <Board10 champions={MOCK_DATA} language={'ko'} isDarkmode={false} />;
};

export const Template = {
  render: () => <Boards />,
};
