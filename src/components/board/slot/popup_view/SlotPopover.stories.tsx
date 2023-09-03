import type { Meta, StoryObj } from '@storybook/react';
import { SlotPopover } from '@src/components/board/slot/popup_view/SlotPopover';

const meta = {
  title: 'Example/SlotPopover',
  component: SlotPopover,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof SlotPopover>;
export default meta;

type Story = StoryObj<typeof meta>;

const SlotPopoverStory = () => {
  return <SlotPopover championName={'TFT9_Aatrox'} season={'season_9'} language={'ko_kr'} />;
};

export const Template: Story = {
  render: () => <SlotPopoverStory />,
};
