import type { Meta, StoryObj } from '@storybook/react';
import { Board } from './Board';

const meta = {
  title: 'Example/Board',
  component: Board,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Board>;

export default meta;
type Story = StoryObj<typeof meta>;

const Boards = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flexWrap: 'wrap' }}>
      <Board />
      <Board />
    </div>
  );
};

export const Template: Story = {
  render: () => <Boards />,
};
