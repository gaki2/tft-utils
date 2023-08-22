import { Col, Position, Row, SlotIndex } from '../../types/types';
import { ChampionName } from '../../data/season_9/champion';
import { BOARD_COL_COUNT, BOARD_ROW_COUNT, BOARD_SLOT_COUNT } from '../constants/board_constants';

export type StarLevel = 1 | 2 | 3 | 4;

export type BoardParams = {
  position: Position;
  champion: ChampionName;
};

export type DragState = {
  isDragging: boolean;
  /**
   * 만약 드래그 중이라면, 현재 드래그중인 슬롯의 인덱스이다.
   */
  slotIdx: SlotIndex | null;
  overSlotIdx: SlotIndex | null;
};

export type SlotData = {
  name: ChampionName;
  starLevel?: StarLevel | 0;
};

export type BoardMeta = {
  id: number;
  dragState: DragState;
};

export type BoardModelState = {
  slots: (SlotData | null)[];
} & BoardMeta;

export type BoardStateListener = (state: BoardModelState) => void;
export type BoardDragListener = (state: DragState) => void;

let boardModelIndex = 0;

export class BoardModel {
  private id: number = boardModelIndex++;
  private state: BoardModelState;
  private stateListeners: Set<BoardStateListener> = new Set();
  private dragListeners: Set<BoardDragListener> = new Set();

  public constructor(rawData?: BoardParams[]) {
    this.state = this.createInitialState(rawData);
  }

  private createInitialState(initialState?: BoardParams[]): BoardModelState {
    const state: BoardModelState = {
      slots: [],
      id: this.id,
      dragState: { isDragging: false, slotIdx: null, overSlotIdx: null },
    };
    [...Array(BOARD_COL_COUNT * BOARD_ROW_COUNT).keys()].forEach((idx) => {
      state.slots[idx] = null;
    });
    if (initialState) {
      for (const slotMeta of initialState) {
        const slotIdx = this.positionToSlotIdx(slotMeta.position);
        state.slots[slotIdx] = { name: slotMeta.champion };
      }
    }
    return state;
  }
  private positionToSlotIdx(position: Position): number {
    const idx = position.row * BOARD_COL_COUNT + position.col;
    if (idx < 0 || idx >= BOARD_SLOT_COUNT) {
      throw new Error(`Invalid slot index: ${idx}`);
    }

    return position.row * BOARD_COL_COUNT + position.col;
  }
  private slotIdxToPosition(slotIdx: SlotIndex): Position {
    const row = Math.floor(slotIdx / BOARD_COL_COUNT) as Row;
    const col = (slotIdx % BOARD_COL_COUNT) as Col;
    return { row, col };
  }
  private notifyStateListeners() {
    for (const listener of this.stateListeners) {
      listener(this.state);
    }
  }
  private notifyDragListeners() {
    for (const listener of this.dragListeners) {
      listener(this.state.dragState);
    }
  }
  private swap(slot1: SlotIndex, slot2: SlotIndex) {
    const temp = this.state.slots[slot1];
    this.state.slots[slot1] = this.state.slots[slot2];
    this.state.slots[slot2] = temp;
  }

  public setStarLevel(slotIdx: SlotIndex, starLevel: StarLevel | 0) {
    this.state.slots[slotIdx]!.starLevel = starLevel;
    this.notifyStateListeners();
  }

  public getState() {
    return this.state;
  }

  public getAllSlots() {
    return this.state.slots;
  }

  public addStateListener(listener: (state: BoardModelState) => void) {
    this.stateListeners.add(listener);
  }

  public onChangeDragState(listener: (state: DragState) => void) {
    this.dragListeners.add(listener);
  }

  public getDragState() {
    return this.state.dragState;
  }

  public addChampion(slotIdx: SlotIndex, championName: ChampionName) {
    this.state.slots[slotIdx] = { name: championName };
    this.notifyStateListeners();
  }

  /**
   * @returns 만약 해당 슬롯에 챔피언이 없다면 null 을 반환합니다.
   */
  public getSlotData(slotIdx: SlotIndex) {
    return this.state.slots[slotIdx];
  }

  public getId() {
    return this.id;
  }

  public notifyDragStart(slotIdx: SlotIndex) {
    this.state.dragState.isDragging = true;
    this.state.dragState.slotIdx = slotIdx;

    this.notifyDragListeners();
  }

  public setMousePos(slotIdx: SlotIndex | null) {
    if (slotIdx !== null) {
      this.state.dragState.overSlotIdx = slotIdx;
    } else {
      this.state.dragState.overSlotIdx = null;
    }
  }

  public notifyDragEnd() {
    if (!this.state.dragState.isDragging || this.state.dragState.slotIdx === null) {
      throw new Error('Fail to swap champion: dragState is not valid');
    }

    if (this.state.dragState.overSlotIdx === null) {
      console.error('overSlotIdx is null');
      return;
    }

    this.swap(this.state.dragState.slotIdx, this.state.dragState.overSlotIdx);
    this.state.dragState.isDragging = false;
    this.state.dragState.slotIdx = null;
    this.state.dragState.overSlotIdx = null;

    this.notifyDragListeners();
    this.notifyStateListeners();
  }
}
