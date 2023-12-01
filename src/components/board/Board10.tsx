import { LanguageType } from '../../types';
import { ChampionName_10 } from '../../_generated/season_10/champions_season_10';
import { ChampionNode } from './class/Board';
import { Board, BoardProps } from './Board';
import { TraitName_10 } from '../../_generated/season_10/traits_season_10';

export type BoardChampion10 = {
  name: ChampionName_10;
  headlinerTrait?: TraitName_10;
} & Omit<ChampionNode, 'name' | 'headlinerTrait'>;

export type Board10Props = Pick<BoardProps, 'language' | 'isDarkmode'> & {
  champions: BoardChampion10[];
};

export const Board10 = ({ language, champions, isDarkmode }: Board10Props) => {
  return (
    <Board season={'season_10'} champions={champions} language={language} isDarkmode={isDarkmode} />
  );
};
