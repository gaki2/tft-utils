import { ChampionName, rawChampions } from '../data/season_9/champion';
import { useCallback } from 'react';

export const useChampionImage = () => {
  const getChampionImage = useCallback((name: ChampionName) => {
    return rawChampions.data[name].image;
  }, []);

  return {
    getChampionImage,
  };
};
