import { useMemo } from 'react';
import styles from './Board.module.css';
import { Slot } from './slot/Slot';
import '../../styles/style.css';
import { Position, SlotIndex } from '@src/types/types';
import { BoardModel } from '@src/components/board/model/BoardModel';
import { BoardController } from '@src/components/board/controller/BoardController';
import { ChampionName } from '@src/static/types/championType';

export type BuilderProps = { temp?: number };

type MOCK = {
  position: Position;
  champion: ChampionName;
};

const MOCK_DATA: MOCK[] = [
  {
    position: {
      row: 0,
      col: 3,
    },
    champion: 'TFT9_JarvanIV',
  },
  {
    position: {
      row: 3,
      col: 4,
    },
    champion: 'TFT9_Karma',
  },
  {
    position: {
      row: 0,
      col: 4,
    },
    champion: 'TFT9_Sion',
  },
];

export const Board = ({}: BuilderProps) => {
  const season = 'season_9';
  const language = 'ko_kr';
  const { board, boardId } = useMemo(
    () => BoardController.getInstance().createBoard(MOCK_DATA),
    []
  );

  return (
    <div className={styles.board_wrapper}>
      {board.getAllSlots().map((_, idx) => (
        <Slot
          key={idx}
          initialSlotData={_}
          slotIdx={idx as SlotIndex}
          boardId={boardId}
          season={season}
          language={language}
        />
      ))}
    </div>
  );
};
