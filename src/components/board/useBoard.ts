import {useEffect, useMemo, useState} from "react";
import {Board, ChampionData} from './class/Board';

export const useBoard = (championData: ChampionData[]) => {
  const [rerender, setRerender] = useState(0);
  const board = useMemo(() =>  new Board(championData), [])

  useEffect(() => {
    if (board) {
      board.addSlotsStateListener(() => {
        setRerender((prev) => prev + 1)
      })
    }
  }, [board]);

  return {
    board,
  }
}