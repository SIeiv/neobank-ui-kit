import type { Meta, StoryObj } from '@storybook/react-vite';

import { Range } from './range';

const meta = {
    component: Range,
} satisfies Meta<typeof Range>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 10
    }
};
