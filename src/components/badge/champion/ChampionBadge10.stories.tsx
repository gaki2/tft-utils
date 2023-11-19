import type { Meta, StoryFn } from '@storybook/react';
import { ChampionBadge10, ChampionBadge10Props } from './ChampionBadge10';
import { champions_season_10 } from '../../../_generated/season_10/champions_season_10';
import styled from 'styled-components';

const meta = {
  title: 'Example/Badge/Champion',
  component: ChampionBadge10,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(champions_season_10).map((apiName) => apiName.split('_')[1]),
    },
  },
} satisfies Meta<typeof ChampionBadge10>;

export default meta;

const Template = (args: ChampionBadge10Props) => {
  return (
    <Wrapper>
      <ChampionBadge10 {...args} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Season10: StoryFn<ChampionBadge10Props> = Template.bind({});
Season10.args = {
  name: 'Akali',
  lang: 'ko',
};
