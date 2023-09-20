import { useEffect, useMemo, useRef, useState } from 'react';
import { BoardController } from '../board/controller/BoardController';
import { SlotData } from '../board/model/Board';
import { SlotIndex } from '../../types/board';
import { Season } from '../../types/seasonType';
import { LanguageType } from '../../types/config';
import { getChampionDisplayName, getCost } from '../../getter';
import { throttle } from '../../utils/throttle';
import { Popover } from '../../utils/popover/Popover';
import { SlotPopup } from './popup_view/SlotPopup';
import styled from 'styled-components';
import {S3} from "../../environments/urls";
import {Label} from "./label/Label";

type SlotProps = {
  initialSlotData: SlotData | null;
  slotIdx: SlotIndex;
  boardId: number;
  season: Season;
  language: LanguageType;
};

type Dimension = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export const Slot = ({ initialSlotData, slotIdx, boardId, season, language }: SlotProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageDivRef = useRef<HTMLDivElement>(null);
  const [slotData, setSlotData] = useState<SlotData | null>(initialSlotData);
  const cost = useMemo(() => (slotData ? getCost(slotData.name, season) : null), [slotData]);
  const championDisplayName = useMemo(() => {
    if (slotData) {
      return getChampionDisplayName(slotData.name, season, language);
    }
    return '';
  }, [slotData, language]);
  const [isOpened, setIsOpend] = useState(false);
  const [dimension, setDimension] = useState<Dimension | null>(null);

  useEffect(() => {
    const updateDimension = throttle(() => {
      if (wrapperRef.current) {
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;
        const { top, left, width, height } = wrapperRef.current?.getBoundingClientRect();
        setDimension({ top: top + scrollY, left: left + scrollX, width, height });
      }
    }, 20);

    if (window && wrapperRef.current && slotData) {
      updateDimension();
      window.addEventListener('resize', updateDimension);

      return () => {
        window.removeEventListener('resize', updateDimension);
      };
    }
  }, [slotData]);

  useEffect(() => {
    BoardController.getInstance().addStateListener(boardId, (newState) => {
      setSlotData(newState.slots[slotIdx]);
    });

    function onDragStart() {
      setIsOpend(false);
      BoardController.getInstance().notifyDragStart(boardId, slotIdx);
    }

    function onDragOver(e: DragEvent) {
      e.preventDefault();
      if (BoardController.getInstance().getState(boardId)?.dragState.isDragging) {
        wrapperRef.current?.setAttribute('backgroundColor', '#6497af');
        imageDivRef.current?.classList.add('isOver');
        BoardController.getInstance().setMousePosition({ slotIdx, boardId });
      }
    }

    function onDragLeave() {
      if (BoardController.getInstance().getState(boardId)?.dragState.isDragging) {
        wrapperRef.current?.setAttribute('backgroundColor', 'transparent');
        imageDivRef.current?.classList.remove('isOver');
        BoardController.getInstance().setMousePosition({ slotIdx: null, boardId });
      }
    }

    function onDrop() {
      BoardController.getInstance().notifyDragEnd(boardId);
      // imageDivRef.current?.classList.remove('isOver');
      wrapperRef.current?.setAttribute('backgroundColor', 'transparent');
    }

    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('dragstart', onDragStart);
      wrapperRef.current.addEventListener('dragover', onDragOver);
      wrapperRef.current.addEventListener('dragleave', onDragLeave);
      wrapperRef.current.addEventListener('drop', onDrop);
    }

    return () => {
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener('dragstart', onDragStart);
        wrapperRef.current.removeEventListener('dragover', onDragOver);
        wrapperRef.current.removeEventListener('dragleave', onDragLeave);
        wrapperRef.current.removeEventListener('drop', onDrop);
      }
    };
  }, []);

  return (
    <>
      <Wrapper draggable={Boolean(slotData)} ref={wrapperRef} onClick={() => setIsOpend(true)}>
        <Border cost={cost}>
          <ImageDiv ref={imageDivRef} championName={slotData?.name} season={season} />
          {/*{Boolean(slotData) && <Label rule={'sub_tank'} lang={language} />}*/}
          {Boolean(slotData) && <ChampionName>{championDisplayName}</ChampionName>}
        </Border>
      </Wrapper>
      {slotData && isOpened && (
        <Popover
          parentTop={dimension?.top ?? 0}
          parentLeft={dimension?.left ?? 0}
          parentWidth={dimension?.width ?? 0}
          parentHeight={dimension?.height ?? 0}
          closePopover={() => setIsOpend(false)}>
          <SlotPopup championName={slotData?.name} season={season} language={language} />
        </Popover>
      )}
    </>
  );
};


const Wrapper = styled.div`
  --initial_bg: transparent;

  width: 100%;
  height: 100%;
  position: relative;
  background-color: var(--initial_bg);
`;

const Border = styled.div<{ cost: number | undefined | null }>`
  --1_cost_border: rgb(128, 128, 128);
  --2_cost_border: rgb(17, 178, 136);
  --3_cost_border: rgb(32, 122, 199);
  --4_cost_border: rgb(196, 64, 218);
  --5_cost_border: rgb(255, 185, 59);

  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: var(--border-width);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-color: ${({ cost }) => (cost ? `var(--${cost}_cost_border)` : '#000')};
`;

const ImageDiv = styled.div<{ championName: string | undefined; season: Season }>`
  &.isOver {
    background-color: #6497af;
  }

  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: #fff 50% / cover no-repeat;
  background-image: ${({ championName, season }) =>
    championName ? `url(${S3}/${season}/champions/${championName}.png)` : ''};
  cursor: ${({ championName }) => (championName ? 'pointer' : 'default')};
`;

const ChampionName = styled.span`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 18%;
  color: #fff;
  white-space: nowrap;
  text-shadow: rgb(0, 0, 0) -1px 0px, rgb(0, 0, 0) 0px 1px, rgb(0, 0, 0) 1px 0px,
    rgb(0, 0, 0) 0px -1px;
  text-align: center;
  font-size: var(--font-size);
  font-weight: 600;
  transform: scale(var(--font-scale));
`;
