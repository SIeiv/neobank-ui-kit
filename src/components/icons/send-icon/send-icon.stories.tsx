import type { Meta, StoryObj } from '@storybook/react-vite';

import { SendIcon } from './send-icon';

const meta = {
    component: SendIcon,
} satisfies Meta<typeof SendIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
