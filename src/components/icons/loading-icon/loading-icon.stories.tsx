import type { Meta, StoryObj } from '@storybook/react-vite';

import { LoadingIcon } from './loading-icon';

const meta = {
    component: LoadingIcon,
} satisfies Meta<typeof LoadingIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
