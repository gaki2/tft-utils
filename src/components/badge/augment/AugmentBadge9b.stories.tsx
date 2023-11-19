import { augments_season_9b } from '../../../_generated/season_9b/augments_season_9b';
import { join } from 'lodash';
import { AugmentBadge9b, AugmentBadge9bProps } from './AugmentBadge9b';
import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

const meta = {
  title: 'Example/Badge/Augment',
  component: AugmentBadge9b,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(augments_season_9b).map((apiName) =>
        join(apiName.split('_').slice(2), '_')
      ),
    },
  },
} satisfies Meta<typeof AugmentBadge9b>;

export default meta;

const Template = (args: AugmentBadge9bProps) => {
  return (
    <Wrapper>
      <AugmentBadge9b {...args} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Season9b: StoryFn<AugmentBadge9bProps> = Template.bind({});
Season9b.args = {
  name: 'DemaciaEmblem',
  lang: 'ko',
};
