import { BoardModel } from './model/BoardModel';
import { useMemo } from 'react';
import styles from './Board.module.css';
import { Slot } from '../slot/Slot';
import '../styles/style.css';

export type BuilderProps = { temp?: number };

export const Board = ({}: BuilderProps) => {
  const boardModel = useMemo(
    () =>
      new BoardModel([
        {
          position: {
            row: 1,
            col: 1,
          },
          champion: 'JarvanIV',
        },
      ]),
    []
  );

  return (
    <div className={styles.board_wrapper}>
      {boardModel.getAllSlots().map((slot, idx) => (
        <Slot key={idx} slotIdx={idx} slotData={slot} />
      ))}
    </div>
  );
};
