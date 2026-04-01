import type { Meta, StoryObj } from '@storybook/react-vite';

import { Link } from './link';

const meta = {
    component: Link,
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        to: 'to',
        children: ['Ссылка'],
    },
};
