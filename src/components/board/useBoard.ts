import {useMemo, useState} from "react";
import {Board, ChampionData} from './model/Board';

export const useBoard = (championData: ChampionData[]) => {
  const [rerender, setRerender] = useState(0);
  const board = useMemo(() =>  new Board(championData), [])

  return {
    board,
  }
}