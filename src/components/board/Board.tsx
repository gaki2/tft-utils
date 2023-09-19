import { useMemo } from 'react';
import { Slot } from '../slot/Slot';
import { Position, SlotIndex } from '../../types/board';
import { Season } from '../../types/seasonType';
import { LanguageType } from '../../types/config';
import { ChampionName } from '../../types/championType';
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
  --slot-width: 84px;
  --slot-height: 96px;
  --font-size: 13px;
  --border-width: 3px;
  --font-scale: 1;

  width: 100%;
  justify-content: center;
  -webkit-box-pack: center;
  display: grid;
  grid-template-rows: repeat(4, var(--slot-height));
  grid-template-columns: repeat(7, var(--slot-width));
  gap: 0 4px;
  flex-shrink: 0;

  & > :nth-child(n + 1):nth-child(-n + 7) {
    transform: translateX(calc(-25% - 1px));
  }

  & > :nth-child(n + 8):nth-child(-n + 14) {
    transform: translateX(calc(25% + 1px));
  }

  & > :nth-child(n + 15):nth-child(-n + 21) {
    transform: translateX(calc(-25% - 1px));
  }

  & > :nth-child(n + 22):nth-child(-n + 28) {
    transform: translateX(calc(25% + 1px));
  }

  & * {
    box-sizing: border-box;
  }
  
  @media (max-width: 768px) {
    --font-scale: 0.7;
    --slot-width: 44px;
    --slot-height: 50px;
    --font-size: 11px;
    --border-width: 2px;
  }
`;
