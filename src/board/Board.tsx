import { useMemo } from 'react';
import styles from './Board.module.css';
import { Slot } from './slot/Slot';
import '../styles/style.css';
import { BoardController } from './controller/BoardController';
import { SlotIndex } from '../types/types';

export type BuilderProps = { temp?: number };

const MOCK_DATA = [
  {
    position: {
      row: 0,
      col: 3,
    },
    champion: 'JarvanIV',
  },
  {
    position: {
      row: 3,
      col: 4,
    },
    champion: 'Karma',
  },
  {
    position: {
      row: 0,
      col: 4,
    },
    champion: 'Sion',
  },
];

export const Board = ({}: BuilderProps) => {
  const { board, boardId } = useMemo(
    () => BoardController.getInstance().createBoard(MOCK_DATA),
    []
  );

  return (
    <div className={styles.board_wrapper}>
      {board.getAllSlots().map((_, idx) => (
        <Slot key={idx} slotIdx={idx as SlotIndex} boardId={boardId} />
      ))}
    </div>
  );
};
