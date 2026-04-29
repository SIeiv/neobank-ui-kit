import type { Meta, StoryObj } from '@storybook/react-vite';

import { Divider } from './divider';

const meta = {
    component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {title: "title", description: "jbhfddgjgdhjdshgj"},
            {title: "title", description: "jbhfddgjgdhjdshgj"},
            {title: "title", description: "jbhfddgjgdhjdshgj"},
            {title: "title", description: "jbhfddgjgdhjdshgj"},
            {title: "title", description: "jbhfddgjgdhjdshgj"},
            {title: "title", description: "jbhfddgjgdhjdshgj"},
            {title: "title", description: "jbhfddgjgdhjdshgj"},
            {title: "title", description: "jbhfddgjgdhjdshgj"},
        ],
    },
};
