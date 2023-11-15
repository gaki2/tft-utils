import { Meta } from '@storybook/react';
import { ErrorBadge } from './ErrorBadge';

const meta = {
  title: 'Example/Badge/ErrorBadge',
  component: ErrorBadge,
  parameters: {
    layout: 'centered',
  },
  // argTypes: {
  //   errorText: {
  //     control: 'select',
  //     options: ['sd', 'esx'],
  //   },
  // },
} satisfies Meta<typeof ErrorBadge>;

export default meta;

export const TT = {
  args: {
    errorText: '챔피언 이름을 찾을 수 없습니다.',
  },
};
