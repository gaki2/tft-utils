import type { Meta } from '@storybook/react';
import { ItemBadge } from './ItemBadge';
import styled from 'styled-components';
import { LanguageType, Season } from '../../../types';
import { ItemGetter, ItemName } from '../../../getter/item_getter';

const meta = {
  title: 'Example/Badge/Item',
  component: ItemBadge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ItemBadge>;

export default meta;

const ItemView = <S extends Season, L extends LanguageType>({
  itemNames,
  season,
  language,
}: {
  itemNames: ItemName<S, L>[];
  season: S;
  language: L;
}) => {
  return (
    <Wrapper>
      {itemNames.map((name) => (
        <ItemBadge key={name} itemName={name} season={season} lang={language} />
      ))}
    </Wrapper>
  );
};

export const Season_9 = {
  render: () => {
    const itemGetter = new ItemGetter('season_9', 'ko');
    const itemNames = itemGetter.getAllItemNames();

    return <ItemView itemNames={itemNames} language={'ko'} season={'season_9'} />;
  },
};

export const Season_9b = {
  render: () => {
    const itemGetter = new ItemGetter('season_9b', 'ko');
    const itemNames = itemGetter.getAllItemNames();
    return <ItemView itemNames={itemNames} language={'ko'} season={'season_9b'} />;
  },
};

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
