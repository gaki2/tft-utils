import { Position } from '../../../../../types/board';
import { LanguageType, Season } from '../../../../../types';
import { ChampionGetter } from '../../../../../getter/champion_getter';
import { ToDotPng, ToLowerCase } from '../../../../../utils/regex';
import { SEASON_10_BASEURL } from '../../../../../environments/urls';

export const BOARD_ROW_COUNT = 4;
export const BOARD_COL_COUNT = 7;
export const BOARD_SLOT_COUNT = BOARD_ROW_COUNT * BOARD_COL_COUNT;

export type StarLevel = 0 | 1 | 2 | 3 | 4;
export type ChampionData = {
  name: string;
  apiName: string;
  url: string;
  cost: number;
  traits: string[];
};

export type MetaData = Partial<{
  main: boolean;
  starLevel: StarLevel;
  headliner: boolean;
  headlinerTrait: string;
}> & {
  position: Position;
};

export type ChampionNode = ChampionData & MetaData;

export type SlotData = ChampionData & MetaData;

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
  private season: Season;
  private lang: LanguageType;

  public constructor(champions: ChampionNode[], season: Season, lang: LanguageType) {
    this.season = season;
    this.lang = lang;

    const slots: (SlotData | null)[] = Array(BOARD_SLOT_COUNT).fill(null);
    for (let i = 0; i < champions.length; i++) {
      const { row, col } = champions[i].position;
      const idx = this.convertRowColToIdx({ row, col });
      slots[idx] = champions[i];
    }

    this.state = { slots, isDragging: false, draggingSlotIdx: null, dragoverSlotIdx: null };
  }

  public insert(champion: ChampionNode) {
    this.state.slots[this.convertRowColToIdx(champion.position)] = champion;
    this.slotsStateListener(this.state);
  }

  public delete(idx: number) {
    this.state.slots[idx] = null;
    this.slotsStateListener(this.state);
  }

  public reset() {
    this.state.slots = Array(BOARD_SLOT_COUNT).fill(null);
    this.slotsStateListener(this.state);
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

  private convertIdxToRowCol(idx: number): Position | null {
    if (idx < 0 || idx >= BOARD_SLOT_COUNT) {
      console.error(`Board 의 ${idx} 가 범위를 초과했습니다. min: 0, max: ${BOARD_SLOT_COUNT - 1}`);
      return null;
    }
    return { row: Math.floor(idx / BOARD_COL_COUNT), col: idx % BOARD_COL_COUNT };
  }

  public findEmptySlot() {
    const emptySlotIdx = this.state.slots.findIndex((slot) => slot === null);
    return this.convertIdxToRowCol(emptySlotIdx);
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

  public updateDragState({
    isDragging,
    draggingSlotIdx,
    dragoverSlotIdx,
  }: Partial<Pick<BoardModelState, 'isDragging' | 'draggingSlotIdx' | 'dragoverSlotIdx'>>) {
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

  private _swap(slotIdx1: number, slotIdx2: number) {
    const temp = this.state.slots[slotIdx1];
    this.state.slots[slotIdx1] = this.state.slots[slotIdx2];
    this.state.slots[slotIdx2] = temp;

    // 만약 슬롯의 값이 null 이 아니라면, position 을 업데이트 해줍니다.
    if (this.state.slots[slotIdx1] !== null) {
      this.state.slots[slotIdx1]!.position = this.convertIdxToRowCol(slotIdx1)!;
    }
    if (this.state.slots[slotIdx2] !== null) {
      this.state.slots[slotIdx2]!.position = this.convertIdxToRowCol(slotIdx2)!;
    }
  }

  public swap() {
    if (!this.state.isDragging || this.state.draggingSlotIdx === null) {
      console.error(
        `Fail to swap champion: dragState is not valid (isDragging: ${this.state.isDragging}, draggingSlotIdx: ${this.state.draggingSlotIdx})`
      );
      return;
    }

    if (this.state.dragoverSlotIdx === null) {
      console.error(
        `Fail to swap champion: dragState is not valid (draggingSlotIdx: ${this.state.draggingSlotIdx})`
      );
      return;
    }

    this._swap(this.state.draggingSlotIdx, this.state.dragoverSlotIdx);
    this.state.isDragging = false;
    this.state.draggingSlotIdx = null;
    this.state.dragoverSlotIdx = null;

    this.slotsStateListener(this.state);
  }
}
