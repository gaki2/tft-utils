import type { Meta, StoryFn } from '@storybook/react';
import { ChampionBadge10, ChampionBadge10Props } from './ChampionBadge10';
import { LanguageType, Season } from '../../../types';
import { champions_season_10 } from '../../../_generated/season_10/champions_season_10';
import { ComponentProps } from 'react';
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
      {/*아래는 툴팁의 컨텐츠가 다른 요소에 의해 가려지는지 테스트하기 위해서 추가한 컴포넌트*/}
      <Mock />
      <ChampionBadge10 name={'Senna'} lang={'ko'} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Mock = styled.div`
  width: 40px;
  height: 40px;
  background-color: antiquewhite;
`;

export const Season10: StoryFn<ChampionBadge10Props> = Template.bind({});
Season10.args = {
  name: 'Akali',
  lang: 'ko',
};
