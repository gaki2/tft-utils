import { useState } from 'react';
import styles from './Star.module.css';

export type StarLevelProps = {
  id: string;
  can4thStar?: boolean;
};

export type Level = 1 | 2 | 3 | 4;

export const StarLevel = ({ id, can4thStar }: StarLevelProps) => {
  const [starLevel, setStarLevel] = useState<Level | 0>(0);
  const onClick = (level: Level) => {
    if (starLevel < level) {
      setStarLevel(level);
    } else if (starLevel === level) {
      setStarLevel((level - 1) as Level);
    } else if (starLevel > level) {
      setStarLevel(level);
    }
  };

  return (
    <div
      className={`${styles.star_wrapper} ${starLevel === 0 ? styles.hide : styles.show} ${
        starLevel === 4 ? styles.platinum : ''
      }`}
      id={id}>
      <Star level={1} filled={starLevel >= 1 && starLevel !== 0} onClick={onClick}></Star>
      <Star level={2} filled={starLevel >= 2 && starLevel !== 0} onClick={onClick}></Star>
      <Star level={3} filled={starLevel >= 3 && starLevel !== 0} onClick={onClick}></Star>
      {can4thStar && (
        <Star level={4} filled={starLevel >= 4 && starLevel !== 0} onClick={onClick}></Star>
      )}
    </div>
  );
};

export const Star = ({
  level,
  onClick,
  filled,
}: {
  level: Level;
  onClick: (level: Level) => void;
  filled: boolean;
}) => {
  return (
    <span
      className={`${styles.star} ${filled ? styles.yellow : ''}`}
      onClick={() => onClick(level)}>
      ★
    </span>
  );
};
