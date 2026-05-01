import type { Meta, StoryObj } from '@storybook/react-vite';

import { ErrorIcon } from './error-icon';

const meta = {
    component: ErrorIcon,
} satisfies Meta<typeof ErrorIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
