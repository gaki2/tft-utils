import type { Meta, StoryObj } from '@storybook/react';
import { Slot } from './Slot';
import { getAllChampionNames } from '../../_generated/getter';

const meta = {
  title: 'Example/Slot',
  component: Slot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Slot>;

export default meta;

type Story = StoryObj<typeof meta>;

const AllSlots = () => {
  const champions = getAllChampionNames('season_9', 'en_us');
  const season = 'season_9';

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' }}>
      {champions.map((champion) => (
        <div key={champion} style={{ position: 'relative', width: '84px', height: '96px' }}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*// @ts-ignore */}
          <Slot
            slotIdx={1}
            initialSlotData={{ name: champion }}
            season={season}
            language={'en_us'}
          />
        </div>
      ))}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Template: Story = {
  render: () => <AllSlots />,
};
