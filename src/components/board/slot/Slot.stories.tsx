import type { Meta, StoryObj } from '@storybook/react';
import { Slot } from './Slot';
import '../../../styles/style.css';
import { getAllChampionNames, getChampions } from '@src/static/getter';

const meta = {
  title: 'Example/Slot',
  component: Slot,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Slot>;
export default meta;

type Story = StoryObj<typeof meta>;

const AllSlots = () => {
  const champions = getAllChampionNames('season_9', 'ko_kr');
  const season = 'season_9';

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' }}>
      {champions.map((champion) => (
        <div key={champion} style={{ position: 'relative', width: '84px', height: '96px' }}>
          <Slot
            slotIdx={1}
            initialSlotData={{ name: champion }}
            season={season}
            language={'ko_kr'}
          />
        </div>
      ))}
    </div>
  );
};

export const Template: Story = {
  render: () => <AllSlots />,
};
