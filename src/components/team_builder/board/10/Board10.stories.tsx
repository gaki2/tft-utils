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
  { name: 'TahmKench', position: { row: 0, col: 0 } },
  { name: 'Urgot', position: { row: 0, col: 1 } },
  { name: 'KSante', position: { row: 0, col: 2 } },
  { name: 'Sett', position: { row: 0, col: 3 }, headliner: true, headlinerTrait: 'PopBand' },
  { name: 'Yone', position: { row: 0, col: 4 } },
  { name: 'Ekko', position: { row: 0, col: 5 } },
  { name: 'KSante', position: { row: 0, col: 6 } },
  { name: 'Bard', position: { row: 1, col: 0 } },
  { name: 'Lux', position: { row: 1, col: 1 } },
  { name: 'Amumu', position: { row: 1, col: 2 } },
  { name: 'Twitch', position: { row: 1, col: 3 } },
  { name: 'Senna', position: { row: 1, col: 4 } },
  { name: 'Bard', position: { row: 1, col: 5 } },
  { name: 'Gnar', position: { row: 1, col: 6 } },
  { name: 'Neeko', position: { row: 2, col: 0 } },
  { name: 'Lux', position: { row: 2, col: 1 } },
  { name: 'Amumu', position: { row: 2, col: 2 } },
  { name: 'Garen', position: { row: 2, col: 3 } },
  { name: 'Twitch', position: { row: 2, col: 4 } },
  { name: 'Aphelios', position: { row: 3, col: 0 } },
  { name: 'Senna', position: { row: 3, col: 1 } },
];

const Boards = () => {
  return <Board10 champions={MOCK_DATA} language={'ko'} isDarkmode={false} mode={'edit'} />;
};

export const Template = {
  render: () => <Boards />,
};
