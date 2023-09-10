import { useMemo } from 'react';
import { Slot } from '../slot/Slot';
import { Position, SlotIndex } from '../../types/types';
import { Season } from '../../_generated/types/seasonType';
import { LanguageType } from '../../script/config';
import { ChampionName } from '../../_generated/types/championType';
import { BoardController } from './controller/BoardController';
import styled from 'styled-components';

export type BuilderProps = { champions: ChampionData[]; season: Season; language?: LanguageType };

export type ChampionData = {
  position: Position;
  champion: ChampionName;
};

export const Board = ({ champions, season, language = 'ko_kr' }: BuilderProps) => {
  const { board, boardId } = useMemo(
    () => BoardController.getInstance().createBoard(champions),
    []
  );

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --width: 632px;
  --ratio: 1.6;

  width: var(--width);
  height: calc(var(--width) / var(--ratio));
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(7, 1fr);
  gap: 0 8px;
  flex-shrink: 0;

  & > :nth-child(n + 1):nth-child(-n + 7) {
    transform: translateX(-25%);
  }

  & > :nth-child(n + 8):nth-child(-n + 14) {
    transform: translate(25%, -10%);
  }

  & > :nth-child(n + 15):nth-child(-n + 21) {
    transform: translate(-25%, -20%);
  }

  & > :nth-child(n + 22):nth-child(-n + 28) {
    transform: translate(25%, -30%);
  }

  & > * {
    box-sizing: border-box;
  }
`;
