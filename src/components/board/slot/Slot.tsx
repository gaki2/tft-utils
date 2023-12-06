import React, { useRef } from 'react';
import { Board, SlotData } from '../class/Board';
import { SlotIndex } from '../../../types/board';
import { LanguageType, Season } from '../../../types/config';
import styled from 'styled-components';
import { Rule } from './label/Rule';
import { StarLevel } from './star/StarLevel';
import { SEASON_10_BASEURL } from '../../../environments/urls';

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
        {slotData?.headliner && (
          <Headliner
            src={`${SEASON_10_BASEURL}/assets/ux/tft/hud/headliner/set10_headliner_icon.png`}
          />
        )}
        <StyledBorder cost={slotData?.championData?.cost} headliner={Boolean(slotData?.headliner)}>
          <StyledImageDiv ref={imageDivRef} url={slotData?.championData?.url ?? ''} />
          {slotData?.main && <Rule />}
          {Boolean(slotData) && (
            <StyledChampionName>{slotData?.championData?.name}</StyledChampionName>
          )}
        </StyledBorder>
        {slotData?.starLevel && <StarLevel starLevel={slotData?.starLevel} />}
      </StyledWrapper>
    </>
  );
};

export const MemoizedSlot = React.memo(Slot, (prevProps, nextProps) => {
  return prevProps.slotData === nextProps.slotData;
});

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: transparent;
`;

const Headliner = styled.img`
  position: absolute;
  z-index: 100;
  width: calc(var(--slot-height) * 0.25);
  height: calc(var(--slot-height) * 0.25);
  max-width: 100%;
  top: 25%;
  left: 3%;
`;

const StyledBorder = styled.div<{ cost: number | undefined | null; headliner: boolean }>`
  --1_cost_border: rgb(128, 128, 128);
  --2_cost_border: rgb(17, 178, 136);
  --3_cost_border: rgb(32, 122, 199);
  --4_cost_border: rgb(196, 64, 218);
  --5_cost_border: rgb(255, 185, 59);

  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: var(--border-width);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-color: ${({ cost }) => (cost ? `var(--${cost}_cost_border)` : '#000')};

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  &::before {
    content: '';
    display: ${({ headliner }) => (headliner ? 'block' : 'none')};
    background: ${({ cost }) =>
      cost
        ? `conic-gradient(
      var(--${cost}_cost_border) 0deg,
      var(--${cost}_cost_border) 140deg,
      rgb(255,255,255) 180deg,
      var(--${cost}_cost_border) 180deg,
      var(--${cost}_cost_border) 320deg,
      rgb(255,255,255) 1turn
    )`
        : '#000'};
    animation: 2s linear 0s infinite normal none running rotate;
    border-radius: 8px;
    box-sizing: border-box;
    height: 200%;
    left: -50%;
    position: absolute;
    top: -50%;
    width: 160%;
  }
`;

const StyledImageDiv = styled.div<{ url: string }>`
  &.isOver {
    background-color: #6497af;
  }

  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: var(--background-color) 50% / cover no-repeat;
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
