import type { Meta, StoryObj } from '@storybook/react-vite';

import { ArrowIcon } from './arrow-icon';

const meta = {
    component: ArrowIcon,
} satisfies Meta<typeof ArrowIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        direction: 'left',
    },
};
