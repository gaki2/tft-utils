import { join } from 'lodash';
import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { ItemBadge10, ItemBadge10Props } from './ItemBadge10';
import { items_season_10 } from '../../../_generated/season_10/items_season_10';

const meta = {
  title: 'Example/Badge/Item',
  component: ItemBadge10,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(items_season_10).map((apiName) =>
        join(apiName.split('_').slice(2), '_')
      ),
    },
  },
} satisfies Meta<typeof ItemBadge10>;

export default meta;

const Template = (args: ItemBadge10Props) => {
  return (
    <Wrapper>
      <ItemBadge10 {...args} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Season10: StoryFn<ItemBadge10Props> = Template.bind({});
Season10.args = {
  name: 'Guardbreaker',
  lang: 'ko',
};
