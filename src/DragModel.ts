/**
 * @description DragModel 은 Board 의 drag 이벤트를 관리하기 위한 모델입니다.
 * 이 모델은 오로지 BoardModel 에서만 사용됩니다.
 * 그 외 다른 곳에서는 사용할 수 없습니다.
 */
export type DragModelState = {
  isDragging: boolean;
};

export class DragModel {
  private state: DragModelState = { isDragging: false };

  constructor() {}

  public isDragging() {
    return this.state.isDragging;
  }

  public setDragging(isDragging: boolean) {
    this.state.isDragging = isDragging;
  }
}
