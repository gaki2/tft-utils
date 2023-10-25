import type { Meta } from '@storybook/react';
import { ItemBadge } from './ItemBadge';
import styled from 'styled-components';
import { ItemName } from '../../../types/item';
import { getItems } from '../../../item_getter';
import { Season } from '../../../types';

const meta = {
  title: 'Example/Badge/Item',
  component: ItemBadge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ItemBadge>;

export default meta;

const ItemView = ({ itemNames, season }: { itemNames: ItemName[]; season: Season }) => {
  return (
    <Wrapper>
      {itemNames.map((name) => (
        <ItemBadge key={name} itemName={name} season={season} />
      ))}
    </Wrapper>
  );
};

export const Season_9 = {
  render: () => {
    const items = getItems('season_9', 'ko');
    const itemNames = Object.values(items).map((item) => item.name) as ItemName[];
    return <ItemView itemNames={itemNames} season={'season_9'} />;
  },
};

export const Season_9b = {
  render: () => {
    const items = getItems('season_9b', 'ko');
    const itemNames = Object.values(items).map((item) => item.name) as ItemName[];
    return <ItemView itemNames={itemNames} season={'season_9b'} />;
  },
};

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
