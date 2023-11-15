import { LanguageType } from '../../types';
import { ChampionName_10 } from '../../_generated/season_10/champions_season_10';
import { ChampionNode } from './class/Board';
import { Board } from './Board';

export type BoardChampion10 = {
  name: ChampionName_10;
} & Omit<ChampionNode, 'name'>;

export type Board10Props = { language: LanguageType; champions: BoardChampion10[] };

export const Board10 = ({ language, champions }: Board10Props) => {
  return <Board season={'season_10'} champions={champions} language={language} />;
};
