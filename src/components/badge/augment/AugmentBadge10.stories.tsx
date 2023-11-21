import { join } from 'lodash';
import { AugmentBadge10, AugmentBadge10Props } from './AugmentBadge10';
import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { augments_season_10 } from '../../../_generated/season_10/augments_season_10';

const meta = {
  title: 'Example/Badge/Augment',
  component: AugmentBadge10,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(augments_season_10).map((apiName) =>
        join(apiName.split('_').slice(2), '_')
      ),
    },
  },
} satisfies Meta<typeof AugmentBadge10>;

export default meta;

const Template = (args: AugmentBadge10Props) => {
  return (
    <Wrapper>
      <AugmentBadge10 {...args} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Season10: StoryFn<AugmentBadge10Props> = Template.bind({});
Season10.args = {
  name: 'Infusion',
  lang: 'ko',
};
