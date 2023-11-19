import { join } from 'lodash';
import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { ItemBadge9b, ItemBadge9bProps } from './ItemBadge9b';
import { items_season_9b } from '../../../_generated/season_9b/items_season_9b';

const meta = {
  title: 'Example/Badge/Item',
  component: ItemBadge9b,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(items_season_9b).map((apiName) =>
        join(apiName.split('_').slice(2), '_')
      ),
    },
  },
} satisfies Meta<typeof ItemBadge9b>;

export default meta;

const Template = (args: ItemBadge9bProps) => {
  return (
    <Wrapper>
      <ItemBadge9b {...args} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Season9b: StoryFn<ItemBadge9bProps> = Template.bind({});
Season9b.args = {
  name: 'Bloodthirster',
  lang: 'ko',
};
