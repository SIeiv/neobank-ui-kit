import type { Meta, StoryObj } from '@storybook/react-vite';

import { Heading } from './heading';

const meta = {
    component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        level: 4,
        children: ['Заголовок'],
    },
};
