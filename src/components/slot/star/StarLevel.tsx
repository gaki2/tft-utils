import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

export type StarLevelProps = {
  forthStar?: boolean;
  className?: string;
};

export type StarLevel = 0 | 1 | 2 | 3 | 4;

export const StarLevel = ({ forthStar, className }: StarLevelProps) => {
  const [starLevel, setStarLevel] = useState<StarLevel>(0);

  const onClickStar = useCallback(
    (e: React.MouseEvent, level: StarLevel) => {
      e.stopPropagation();
      if (starLevel < level) {
        setStarLevel(level);
      } else if (starLevel === level) {
        setStarLevel((level - 1) as StarLevel);
      } else if (starLevel > level) {
        setStarLevel(level);
      }
    },
    [starLevel]
  );

  return (
    <Wrapper starLevel={starLevel} forthStar={Boolean(forthStar)} className={className}>
      <Star onClick={(e) => onClickStar(e, 1)}>★</Star>
      <Star onClick={(e) => onClickStar(e, 2)}>★</Star>
      <Star onClick={(e) => onClickStar(e, 3)}>★</Star>
      <Star onClick={(e) => onClickStar(e, 4)}>★</Star>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ starLevel: number; forthStar: boolean }>`
  --default: #6497af;
  --yellow: #e4c157;
  --platinum: rgb(71, 177, 128);

  position: absolute;
  transform: translate(-50%);
  top: 0;
  left: 50%;
  z-index: 1;
  font-size: 20px;
  color: var(--default);
  text-shadow: 0 2px 5px #000, 0 2px 5px #000;
  visibility: ${({ starLevel }) => (starLevel > 0 ? 'visible' : 'hidden')};

  & > :nth-child(1) {
    color: ${({ starLevel }) =>
      starLevel >= 1 ? (starLevel === 4 ? 'var(--platinum)' : 'var(--yellow)') : 'var(--default)'};
  }

  & > :nth-child(2) {
    color: ${({ starLevel }) =>
      starLevel >= 2 ? (starLevel === 4 ? 'var(--platinum)' : 'var(--yellow)') : 'var(--default)'};
  }

  & > :nth-child(3) {
    color: ${({ starLevel }) =>
      starLevel >= 3 ? (starLevel === 4 ? 'var(--platinum)' : 'var(--yellow)') : 'var(--default)'};
  }

  & > :nth-child(4) {
    display: ${({ forthStar }) => (forthStar ? 'inline' : 'none')};
    color: ${({ starLevel }) => (starLevel === 4 ? 'var(--platinum)' : 'var(--yellow)')};
  }
`;

const Star = styled.span`
  cursor: pointer;
`;
