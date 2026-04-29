import type { Meta, StoryObj } from '@storybook/react-vite';

import { TestEnv } from './testEnviroment';

const meta = {
    component: TestEnv,
} satisfies Meta<typeof TestEnv>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        links: [
            {
                text: 'text',
                to: 'to',
            },
            {
                text: 'text2',
                to: 'to',
            },
            {
                text: 'text3',
                to: 'to',
            },
            {
                text: 'text4',
                to: 'to',
            },
        ],
    },
};
