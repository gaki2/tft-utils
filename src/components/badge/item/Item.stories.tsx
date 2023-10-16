import type { Meta, StoryObj } from '@storybook/react';
import { Item } from './Item';
import styled from 'styled-components';
import { ItemName } from '../../../types/item';
import { getItems } from '../../../item_getter';
import { Season } from '../../../types';

const meta = {
  title: 'Example/Item',
  component: Item,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

const ItemView = ({ itemNames, season }: { itemNames: ItemName[]; season: Season }) => {
  return (
    <Wrapper>
      {itemNames.map((name) => (
        <Item key={name} itemName={name} season={season} />
      ))}
    </Wrapper>
  );
};

export const Season_9: Story = {
  render: () => {
    const items = getItems('season_9', 'ko');
    const itemNames = Object.values(items).map((item) => item.name) as ItemName[];
    return <ItemView itemNames={itemNames} season={'season_9'} />;
  },
};

export const Season_9b: Story = {
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
