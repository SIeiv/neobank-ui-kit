import type { Meta, StoryObj } from '@storybook/react-vite';

import { Paragraph } from './paragraph';

const meta = {
    component: Paragraph,
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: ['Параграф'],
        size: 'medium',
        weight: 'normal',
    },
};
