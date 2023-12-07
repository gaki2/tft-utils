import { MemoizedSlot } from './slot/Slot';
import { SlotIndex } from '../../types/board';
import { LanguageType, Season } from '../../types/config';
import styled from 'styled-components';
import { ChampionNode } from './class/Board';
import { useBoard } from './useBoard';
import { TraitList } from './trait_list/TraitList';
import './variable.css';

export type BoardProps = {
  champions: ChampionNode[];
  season: Season;
  language?: LanguageType;
  /**
   * @default false
   */
  isDarkmode?: boolean;
};

export const Board = ({ champions, season, language = 'ko', isDarkmode = false }: BoardProps) => {
  const { board } = useBoard(champions, season, language);

  return (
    <Wrapper data-darkmode={isDarkmode}>
      <GridWrapper>
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
      </GridWrapper>
      <TraitList season={season} allSlotData={board.getAllSlots()} lang={language} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --background-color: #fff;
  --font-color: #000;

  // 다크모드가 트루라면
  &[data-darkmode='true'] {
    --background-color: #606770;
    --font-color: #fff;
  }

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const GridWrapper = styled.div`
  --slot-width: 60px;
  --slot-height: 70px;
  --font-size: 12px;
  --border-width: 2px;
  --font-scale: 1;

  @media (max-width: 768px) {
    --font-scale: 0.7;
    --slot-width: 44px;
    --slot-height: 50px;
    --font-size: 11px;
    --border-width: 2px;
  }

  justify-content: center;
  -webkit-box-pack: center;
  display: grid;
  grid-template-rows: repeat(4, var(--slot-height));
  grid-template-columns: repeat(7, var(--slot-width));
  gap: 0 4px;
  flex-shrink: 0;
  //margin-left: calc(var(--slot-width) * 0.25);

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
`;
