import { MemoizedSlot } from '../slot/Slot';
import { SlotIndex } from '../../types/board';
import { Season } from '../../types/seasonType';
import { LanguageType } from '../../types/config';
import styled from 'styled-components';
import { ChampionNode } from './class/Board';
import { useBoard } from './useBoard';

export type BoardProps = { champions: ChampionNode[]; season: Season; language?: LanguageType };

export const Board = ({ champions, season, language = 'ko' }: BoardProps) => {
  const { board } = useBoard(champions, season, language);

  return (
    <Wrapper>
      {board.getAllSlots().map((slotData, idx) => (
        <MemoizedSlot
          key={idx}
          board={board}
          slotData={slotData}
          slotIdx={idx as SlotIndex}
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
