import { Position, SlotIndex } from '../../../types/board';
import { ChampionName } from '../../../types/championType';

export const BOARD_ROW_COUNT = 4;
export const BOARD_COL_COUNT = 7;
export const BOARD_SLOT_COUNT = BOARD_ROW_COUNT * BOARD_COL_COUNT;

export type StarLevel = 0 | 1 | 2 | 3 | 4;
export type Rule = 'main_dps' | 'sub_dps' | 'main_tank' | 'sub_tank'

export type ChampionData = {
  position: Position;
  name: ChampionName;
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
  rule?: Rule;
  starLevel?: StarLevel;
};

export type BoardMeta = {
  dragState: DragState;
};

export type BoardModelState = {
  slots: (SlotData | null)[];
  isDragging: boolean;
  // 현재 마우스로 드래그중인 슬롯의 인덱스
  draggingSlotIdx: number | null;
  // 드래그 중 && 현재 마우스가 올라가 있는 슬롯의 인덱스
  dragoverSlotIdx: number | null;
};

// execute when `slots` state is changed
export type slotsStateListener = (state?: BoardModelState) => void;

export class Board {
  private state: BoardModelState;
  private slotsStateListener: slotsStateListener;

  public constructor(championDataList: ChampionData[]) {
    const slots = Array(BOARD_SLOT_COUNT).fill(null);
    championDataList.forEach((championData) =>
      slots[this.convertRowColToIdx(championData.position)] = { name: championData.name })

    this.state = {slots, isDragging: false, draggingSlotIdx: null, dragoverSlotIdx: null};
  }

  private convertRowColToIdx(position: Position): number {
    const { row, col } = position;

    if (row < 0 || row >= BOARD_ROW_COUNT) {
      throw new Error(`Invalid row: ${row}. Must be in range [0, ${BOARD_ROW_COUNT})`);
    }
    if (col < 0 || col >= BOARD_COL_COUNT) {
      throw new Error(`Invalid col: ${col}. Must be in range [0, ${BOARD_COL_COUNT})`);
    }
    return row * BOARD_COL_COUNT + col;
  }

  public getState() {
    return this.state;
  }

  public getAllSlots() {
    return this.state.slots;
  }

  public addSlotsStateListener(listener: (state?: BoardModelState) => void) {
    this.slotsStateListener = listener;
  }

  /**
   * @returns 만약 해당 슬롯에 챔피언이 없다면 null 을 반환합니다.
   */
  public getSlotData(slotIdx: number): SlotData | null {
    if (this.state.slots[slotIdx] === undefined) {
      throw new Error(`Invalid slotIdx: ${slotIdx}. Must be in range [0, ${BOARD_SLOT_COUNT})`);
    }

    return this.state.slots[slotIdx];
  }

  public updateDragState({isDragging, draggingSlotIdx, dragoverSlotIdx}: Partial<Pick<BoardModelState, 'isDragging' | 'draggingSlotIdx' | 'dragoverSlotIdx'>>) {
    if (isDragging !== undefined) {
      this.state.isDragging = isDragging;
    }
    if (draggingSlotIdx !== undefined) {
      this.state.draggingSlotIdx = draggingSlotIdx;
    }
    if (dragoverSlotIdx !== undefined) {
      this.state.dragoverSlotIdx = dragoverSlotIdx;
    }
  }

  private _swap(slot1: number, slot2: number) {
    const temp = this.state.slots[slot1];
    this.state.slots[slot1] = this.state.slots[slot2];
    this.state.slots[slot2] = temp;
  }

  public swap() {
    if (!this.state.isDragging || this.state.draggingSlotIdx === null) {
      console.error(`Fail to swap champion: dragState is not valid (isDragging: ${this.state.isDragging}, draggingSlotIdx: ${this.state.draggingSlotIdx})`);
      return ;
    }

    if (this.state.dragoverSlotIdx === null) {
      console.error(`Fail to swap champion: dragState is not valid (draggingSlotIdx: ${this.state.draggingSlotIdx})`);
      return ;
    }

    this._swap(this.state.draggingSlotIdx, this.state.dragoverSlotIdx);
    this.state.isDragging = false;
    this.state.draggingSlotIdx = null;
    this.state.dragoverSlotIdx = null;

    this.slotsStateListener(this.state);
  }
}