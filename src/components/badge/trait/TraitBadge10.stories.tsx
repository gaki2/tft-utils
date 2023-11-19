import { join } from 'lodash';
import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { TraitBadge10, TraitBadge10Props } from './TraitBadge10';
import { traits_season_10 } from '../../../_generated/season_10/traits_season_10';

const meta = {
  title: 'Example/Badge/Trait',
  component: TraitBadge10,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(traits_season_10).map((apiName) =>
        join(apiName.split('_').slice(1), '_')
      ),
    },
  },
} satisfies Meta<typeof TraitBadge10>;

export default meta;

const Template = (args: TraitBadge10Props) => {
  return (
    <Wrapper>
      <TraitBadge10 {...args} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Season10: StoryFn<TraitBadge10Props> = Template.bind({});
Season10.args = {
  name: 'IllBeats',
  lang: 'ko',
};
