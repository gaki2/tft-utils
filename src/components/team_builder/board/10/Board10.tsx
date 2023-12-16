import {
  ChampionName_10,
  champions_season_10,
} from '../../../../_generated/season_10/champions_season_10';
import { MetaData } from '../base/class/Board';
import { Board, BoardProps } from '../base/Board';
import { TraitName_10 } from '../../../../_generated/season_10/traits_season_10';
import { useBoard } from '../base/useBoard';
import styled from 'styled-components';
import { ChampionList } from '../../champion_list/base/ChampionList';
import { useMemo } from 'react';
import { filterNullable } from '../../../../utils/my_utils';
import { getChampionDetailDataFromName } from '../../helper/helper';

export type BoardChampion10 = {
  name: ChampionName_10;
  headlinerTrait?: TraitName_10;
} & Omit<MetaData, 'headlinerTrait'>;

export type Board10Props = Pick<BoardProps, 'language' | 'isDarkmode'> & {
  champions: BoardChampion10[];
} & {
  mode?: 'normal' | 'edit';
};

export const Board10 = (props: Board10Props) => {
  const { language = 'ko', champions, isDarkmode, mode = 'normal' } = props;

  const extractCode = () => {
    const slotData = board.getAllSlots();
    console.log(slotData);
    const t = filterNullable(slotData).map((slot) => {
      return {
        name: slot?.apiName.split('_')[1],
        position: slot?.position,
        headliner: slot?.headliner,
        headlinerTrait: slot?.headlinerTrait,
      };
    });

    navigator.clipboard.writeText(JSON.stringify(t));
    console.log(t);
  };

  const reset = () => {
    board.reset();
  };

  const detailData = filterNullable(
    champions.map((champion) => {
      const { name } = champion;
      const detailInfo = getChampionDetailDataFromName({
        name,
        season: 'season_10',
        lang: language,
      });

      // 스킵
      if (!detailInfo) {
        return null;
      }

      return {
        ...champion,
        ...detailInfo,
      };
    })
  );

  const { board } = useBoard(detailData, 'season_10', language);

  const onClick = (name: string) => {
    const newPosition = board.findEmptySlot();
    const detailInfo = getChampionDetailDataFromName({ name, season: 'season_10', lang: language });

    if (!detailInfo) {
      return;
    }

    if (!newPosition) {
      alert('더 이상 챔피언을 추가할 수 없습니다.');
      return;
    }

    board.insert({ position: newPosition, ...detailInfo });
  };

  const list = useMemo(() => {
    const names = Object.keys(champions_season_10) as ChampionName_10[];
    return filterNullable(
      names.map((name) => {
        return getChampionDetailDataFromName({ name, season: 'season_10', lang: language });
      })
    );
  }, []);

  return (
    <Wrapper>
      <Board board={board} season={'season_10'} language={language} isDarkmode={isDarkmode} />
      {mode === 'edit' && (
        <ChampionList
          reset={reset}
          extractCode={extractCode}
          season={'season_10'}
          lang={'ko'}
          list={list}
          onClick={onClick}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
