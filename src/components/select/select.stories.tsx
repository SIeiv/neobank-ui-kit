import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select } from './select';

const meta = {
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        options: [
            {
                value: 'value',
                text: 'text',
            },
            {
                value: 'value',
                text: 'text',
            },
            {
                value: 'value',
                text: 'text',
            },
            {
                value: 'value',
                text: 'text',
            },
        ],
    },
};
