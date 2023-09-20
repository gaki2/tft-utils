import { Board, ChampionData, slotsStateListener } from '../model/Board';
import { SlotIndex } from '../../../types/board';

export class BoardController {
  private static _instance: BoardController;
  private board: Board;
  private boardList: Board[] = [];

  constructor() {
    //
  }

  public static getInstance() {
    if (!this._instance) {
      this._instance = new BoardController();
    }
    return this._instance;
  }

  public createBoard(initialData?: ChampionData[]) {
    this.board = new Board(initialData);
    this.boardList.push(this.board);
    return {
      board: this.board,
      boardId: this.board.getId(),
    };
  }

  public getState(boardId: number) {
    const board = this.boardList.find((board) => board.getId() === boardId);
    return board?.getState();
  }

  public getSlotData(boardId: number, slotIdx: SlotIndex) {
    const board = this.boardList.find((board) => board.getId() === boardId);
    return board?.getSlotData(slotIdx);
  }

  public addStateListener(boardId: number, listener: slotsStateListener) {
    const board = this.boardList.find((board) => board.getId() === boardId);
    board?.addSlotsStateListener(listener);
  }

  public notifyDragStart(boardId: number, slotIdx: SlotIndex) {
    const board = this.boardList.find((board) => board.getId() === boardId);
    board?.updateDragState(slotIdx);
  }

  public notifyDragEnd(boardId: number) {
    const board = this.boardList.find((board) => board.getId() === boardId);
    board?.notifyDragEnd();
  }

  public setMousePosition({ boardId, slotIdx }: { boardId: number; slotIdx: SlotIndex | null }) {
    const board = this.boardList.find((board) => board.getId() === boardId);
    board?.setMousePos(slotIdx);
  }
}
