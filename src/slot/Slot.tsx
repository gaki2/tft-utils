import { SlotIndex } from '../types';
import { SlotData } from '../BoardModel';
import { useChampionImage } from '../_hooks/useChampionImage';
import style from './Slot.module.css';
import { CSSProperties, useEffect, useMemo, useRef } from 'react';

type SlotProps = {
  slotIdx: SlotIndex;
  slotData: SlotData | null;
};

export const Slot = ({ slotIdx, slotData }: SlotProps) => {
  const { getChampionImage } = useChampionImage();
  const championImg = useMemo(() => {
    if (slotData && slotData.name) {
      return getChampionImage(slotData.name);
    }
    return null;
  }, [slotData, getChampionImage]);
  const styles: CSSProperties = {
    backgroundPosition: `-${championImg?.x}px -${championImg?.y}px`,
    backgroundImage: `url(/season_9/img/${championImg?.sprite})`,
    width: championImg?.w * 2,
    height: championImg?.h * 2,
    // backgroundSize: '100px, 100px',
  };
  return (
    <div className={style.slot_wrapper}>
      <div className={style.slot_content} style={styles} draggable={true}></div>
    </div>
  );
};
