import React from 'react';
import styled from 'styled-components';

export type StarLevelProps = {
  starLevel: StarLevel;
  className?: string;
};

export type StarLevel = 1 | 2 | 3 | 4;

export const StarLevel = ({ className, starLevel }: StarLevelProps) => {
  return (
    <Wrapper className={className}>
      {new Array(starLevel).fill(0).map((_, idx) => (
        <Star key={idx}>★</Star>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --default: #6497af;
  --yellow: #e4c157;
  --platinum: rgb(71, 177, 128);

  position: absolute;
  transform: translate(-50%);
  top: 0;
  left: 50%;
  z-index: 1;
  font-size: 20px;
  text-shadow: 0 2px 5px #000, 0 2px 5px #000;
`;

const Star = styled.span`
  color: var(--yellow);
  cursor: pointer;
`;
