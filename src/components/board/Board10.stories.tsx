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
    position: {
      row: 2,
      col: 2,
    },
    name: 'Garen',
    main: true,
  },
  {
    position: {
      row: 2,
      col: 3,
    },
    name: 'Yorick',
  },
];

const Boards = () => {
  return <Board10 champions={MOCK_DATA} language={'ko'} />;
};

export const Template = {
  render: () => <Boards />,
};
