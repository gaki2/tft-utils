import { SlotData } from '../board/model/BoardModel';
import style from './Slot.module.css';
import { CSSProperties } from 'react';
import { rawChampions } from '../data/season_9/champion';
import { StarLevel } from './star/StarLevel';

type SlotProps = {
  slotIdx: number;
  slotData: SlotData | null;
};

export const Slot = ({ slotIdx, slotData }: SlotProps) => {
  const cost = slotData ? rawChampions.data[slotData.name].tier : null;

  const borderStyle: CSSProperties = {
    backgroundColor: cost === null ? '#000' : `var(--${cost}_cost_border)`,
  };

  const championImgDivStyle: CSSProperties = {
    backgroundImage: slotData ? `url(/season_9/img/champion/${slotData.name}.png)` : '',
  };

  return (
    <div className={style.slot_wrapper} draggable={true}>
      {slotData && <StarLevel id={'star_level'} can4thStar={true} />}
      <div className={style.slot_border} style={borderStyle}>
        <div className={style.slot_champion_img} style={championImgDivStyle} />
      </div>
    </div>
  );
};
