import React, { useEffect, useRef, useState } from 'react';
import { Board, SlotData } from '../class/Board';
import { SlotIndex } from '../../../types/board';
import { LanguageType, Season } from '../../../types/config';
import styled from 'styled-components';
import { Rule } from './label/Rule';

type SlotProps = {
  board: Board;
  slotData: SlotData | null;
  slotIdx: SlotIndex;
  season: Season;
  language: LanguageType;
};

const Slot = ({ board, slotData, slotIdx, season, language }: SlotProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageDivRef = useRef<HTMLDivElement>(null);

  const onDragStart = () => {
    board.updateDragState({
      isDragging: true,
      draggingSlotIdx: slotIdx,
    });
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (board.getState().isDragging) {
      wrapperRef.current?.setAttribute('backgroundColor', '#6497af');
      imageDivRef.current?.classList.add('isOver');
      board.updateDragState({
        dragoverSlotIdx: slotIdx,
      });
    }
  };

  const onDragLeave = () => {
    if (board.getState().isDragging) {
      wrapperRef.current?.setAttribute('backgroundColor', 'transparent');
      imageDivRef.current?.classList.remove('isOver');
      board.updateDragState({
        dragoverSlotIdx: null,
      });
    }
  };

  const onDrop = () => {
    board.swap();
    wrapperRef.current?.setAttribute('backgroundColor', 'transparent');
  };

  return (
    <>
      <StyledWrapper
        draggable={Boolean(slotData)}
        ref={wrapperRef}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}>
        <StyledBorder cost={slotData?.championData?.cost}>
          <StyledImageDiv ref={imageDivRef} url={slotData?.championData?.url ?? ''} />
          {slotData?.main && <Rule />}
          {Boolean(slotData) && (
            <StyledChampionName>{slotData?.championData?.name}</StyledChampionName>
          )}
        </StyledBorder>
      </StyledWrapper>
    </>
  );
};

export const MemoizedSlot = React.memo(Slot, (prevProps, nextProps) => {
  return prevProps.slotData === nextProps.slotData;
});

const StyledWrapper = styled.div`
  --initial_bg: transparent;

  width: 100%;
  height: 100%;
  position: relative;
  background-color: var(--initial_bg);
`;

const StyledBorder = styled.div<{ cost: number | undefined | null }>`
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

const StyledImageDiv = styled.div<{ url: string }>`
  &.isOver {
    background-color: #6497af;
  }

  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: #fff 50% / cover no-repeat;
  background-image: ${({ url }) => `url(${url})`};
  cursor: ${({ url }) => (Boolean(url) ? 'pointer' : 'default')};
`;

const StyledChampionName = styled.span`
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