import { BoardModel, BoardParams, BoardStateListener } from '../model/BoardModel';
import { SlotIndex } from '../../../types/types';

export class BoardController {
  private static _instance: BoardController;
  private board: BoardModel;
  private boardList: BoardModel[] = [];

  constructor() {
    //
  }

  public static getInstance() {
    if (!this._instance) {
      this._instance = new BoardController();
    }
    return this._instance;
  }

  public createBoard(initialData?: BoardParams[]) {
    this.board = new BoardModel(initialData);
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

  public addStateListener(boardId: number, listener: BoardStateListener) {
    const board = this.boardList.find((board) => board.getId() === boardId);
    board?.addStateListener(listener);
  }

  public notifyDragStart(boardId: number, slotIdx: SlotIndex) {
    const board = this.boardList.find((board) => board.getId() === boardId);
    board?.notifyDragStart(slotIdx);
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
