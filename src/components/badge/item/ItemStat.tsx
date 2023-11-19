import styled from 'styled-components';
import {
  type ItemStat as Stat,
  itemStatMultiplier,
  itemStatNameMap,
  itemStatUnitMap,
} from './item_stat_map';
import { LanguageType } from '../../../types';
import _ from 'lodash';

type ItemStatProps = {
  lang: LanguageType;
  statRecord: Record<string, number | null>;
};

const StatList: Stat[] = ['MANA', 'ARMOR', 'AD', 'AS', 'MAGICRESIST', 'HEALTH', 'CRITCHANCE', 'AP'];

function uppercaseObjectKeys(obj: Record<string, number | null>) {
  return _.transform<number | null, Record<string, number | null>>(obj, (result, val, key) => {
    result[key.toUpperCase()] = val;
  });
}

export const ItemStat = ({ lang, statRecord }: ItemStatProps) => {
  const uppercaseObj = uppercaseObjectKeys(statRecord);

  return (
    <Wrapper>
      {StatList.map((stat) => {
        if (!uppercaseObj[stat]) {
          return null;
        }
        return (
          <Span key={stat}>{`${itemStatNameMap[stat][lang]} +${Math.round(
            (uppercaseObj![stat] ?? 0) * itemStatMultiplier[stat]
          )}${itemStatUnitMap[stat]}`}</Span>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 0.75rem;
  color: var(--sub-font-color);
`;

const Span = styled.span`
  &:first-child {
    margin-top: 8px;
  }
`;
