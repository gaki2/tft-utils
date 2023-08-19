import { Position, SlotIndex } from '../../types/types';
import { ChampionName } from '../../data/season_9/champion';
import { BOARD_COL_COUNT, BOARD_ROW_COUNT, BOARD_SLOT_COUNT } from '../constants/board_constants';

export type ConstructorParams = {
  position: Position;
  champion: ChampionName;
};

export type DragState = {
  isDragging: boolean;
  /**
   * 만약 드래그 중이라면, 현재 드래그중인 슬롯의 인덱스이다.
   */
  slotIdx: SlotIndex | null;
};

export type SlotData = {
  name: ChampionName;
};

export type BoardMeta = {
  id: number;
  dragState: DragState;
};

export type BoardModelState = {
  slots: (SlotData | null)[];
} & BoardMeta;

let boardModelIndex = 0;

export class BoardModel {
  private id: number = boardModelIndex++;
  private state: BoardModelState;
  private stateListeners: Set<(state: BoardModelState) => void> = new Set();
  private dragListeners: Set<(state: DragState) => void> = new Set();

  public constructor(rawData?: ConstructorParams[]) {
    this.state = this.createInitialState(rawData);
  }
  private createInitialState(initialState?: ConstructorParams[]): BoardModelState {
    const state: BoardModelState = {
      slots: [],
      id: this.id,
      dragState: { isDragging: false, slotIdx: null },
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
    const row = Math.floor(slotIdx / BOARD_COL_COUNT);
    const col = slotIdx % BOARD_COL_COUNT;
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

  public getAllSlots() {
    return this.state.slots;
  }

  public onChangeState(listener: (state: BoardModelState) => void) {
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
  public getSlotData(slotIdx: SlotIndex): { position: Position; slotData: SlotData | null } {
    const position = this.slotIdxToPosition(slotIdx);
    const slotData = this.state.slots[slotIdx];

    return { position, slotData };
  }

  public notifyDragStart(slotIdx: SlotIndex) {
    this.state.dragState.isDragging = true;
    this.state.dragState.slotIdx = slotIdx;

    this.notifyDragListeners();
  }

  public notifyDragEnd(slotIdx: SlotIndex) {
    if (!this.state.dragState.isDragging || !this.state.dragState.slotIdx) {
      throw new Error('Fail to swap champion: dragState is not valid');
    }

    this.swap(this.state.dragState.slotIdx, slotIdx);
    this.state.dragState.isDragging = false;
    this.state.dragState.slotIdx = null;

    this.notifyDragListeners();
    this.notifyStateListeners();
  }
}
