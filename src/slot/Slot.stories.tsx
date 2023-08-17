import type { Meta, StoryObj } from '@storybook/react';
import { Slot } from './Slot';

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

export const Temp: Story = {
  args: { slotIdx: 1, slotData: { name: 'Irelia' } },
};
