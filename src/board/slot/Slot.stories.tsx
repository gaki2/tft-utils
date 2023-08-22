import type { Meta, StoryObj } from '@storybook/react';
import { Slot } from './Slot';
import { rawChampions } from '../../data/season_9/champion';
import '../../styles/style.css';

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
  const allChampions = Object.keys(rawChampions.data);
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' }}>
      {allChampions.map((champion) => (
        <div key={champion} style={{ position: 'relative', width: '84px', height: '96px' }}>
          <Slot slotIdx={1} slotData={{ name: champion }} />
        </div>
      ))}
    </div>
  );
};

export const Template: Story = {
  render: () => <AllSlots />,
};
