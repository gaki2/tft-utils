import type { Meta } from '@storybook/react';
import { ChampionBadge10 } from './ChampionBadge10';
import { LanguageType, Season } from '../../../types';
import { champions_season_10 } from '../../../_generated/season_10/champions_season_10';

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

export const Season10 = {
  args: {
    name: 'Garen',
    lang: 'ko' as LanguageType,
  },
};
