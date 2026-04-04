import type { Meta, StoryObj } from '@storybook/react-vite';

import { CheckIcon } from './check-icon';

const meta = {
    component: CheckIcon,
} satisfies Meta<typeof CheckIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
