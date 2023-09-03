import style from './Slot.module.css';
import { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import { StarLevel } from './star/StarLevel';
import { SlotIndex } from '@src/types/types';
import { BoardController } from '../controller/BoardController';
import { SlotData } from '../model/BoardModel';
import { Season } from '@src/static/types/seasonType';
import { LanguageType } from '@src/script/config';
import { getCost } from '@src/static/getter';
import { Popover } from '@src/utils/popover/Popover';
import { throttle } from '@src/utils/throttle';
import { SlotPopover } from '@src/components/board/slot/popup_view/SlotPopover';

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
  const [slotData, setSlotData] = useState<SlotData | null>(initialSlotData);
  const price = useMemo(() => (slotData ? getCost(slotData.name, season) : null), [slotData]);
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

    if (wrapperRef.current && slotData) {
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

    function onDragStart(e: DragEvent) {
      setIsOpend(false);
      BoardController.getInstance().notifyDragStart(boardId, slotIdx);
    }

    function onDragOver(e: DragEvent) {
      e.preventDefault();
      if (BoardController.getInstance().getState(boardId)?.dragState.isDragging) {
        wrapperRef.current.classList.add(style.isOver);
        BoardController.getInstance().setMousePosition({ slotIdx, boardId });
      }
    }

    function onDragLeave() {
      if (BoardController.getInstance().getState(boardId)?.dragState.isDragging) {
        wrapperRef.current.classList.remove(style.isOver);
        BoardController.getInstance().setMousePosition({ slotIdx: null, boardId });
      }
    }

    function onDrop() {
      BoardController.getInstance().notifyDragEnd(boardId);
      wrapperRef.current.classList.remove(style.isOver);
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

  // <---------------스타일 관련 코드------------------->
  const borderStyle: CSSProperties = {
    backgroundColor: price === null ? '#000' : `var(--${price}_cost_border)`,
  };
  const championImgDivStyle: CSSProperties = {
    backgroundImage: slotData ? `url(/img/${season}/champion/${slotData.name}.png)` : '',
    cursor: slotData ? 'pointer' : 'default',
  };

  return (
    <>
      <div
        className={style.slot_wrapper}
        draggable={Boolean(slotData)}
        ref={wrapperRef}
        onClick={() => setIsOpend(true)}>
        {slotData && <StarLevel id={'star_level'} can4thStar={false} />}
        <div className={style.slot_border} style={borderStyle}>
          <div id={'slot_img'} className={style.slot_champion_img} style={championImgDivStyle} />
        </div>
      </div>
      {slotData && isOpened && (
        <Popover
          parentTop={dimension?.top ?? 0}
          parentLeft={dimension?.left ?? 0}
          parentWidth={dimension?.width ?? 0}
          parentHeight={dimension?.height ?? 0}
          closePopover={() => setIsOpend(false)}>
          <SlotPopover championName={slotData?.name} season={season} language={language} />
        </Popover>
      )}
    </>
  );
};
