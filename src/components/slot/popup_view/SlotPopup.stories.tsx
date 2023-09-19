import type { Meta, StoryObj } from '@storybook/react';
import { SlotPopup } from './SlotPopup';

const meta = {
  title: 'Example/SlotPopup',
  component: SlotPopup,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SlotPopup>;
export default meta;

type Story = StoryObj<typeof meta>;

const SlotPopoverStory = () => {
  return <SlotPopup championName={'TFT9_Aatrox'} season={'season_9'} language={'en_us'} />;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Template: Story = {
  render: () => <SlotPopoverStory />,
};
