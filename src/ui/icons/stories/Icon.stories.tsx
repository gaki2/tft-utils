import { Meta, StoryObj } from '@storybook/react';
import { Dollar } from '../Dollar';

const meta: Meta<typeof Dollar> = {
  title: 'UI/Icon/Dollar',
  component: Dollar,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Dollar>;

export const Primary: Story = {
  render: () => <Dollar />,
};
