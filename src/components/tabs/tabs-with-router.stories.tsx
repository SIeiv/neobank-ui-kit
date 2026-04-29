import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tabs } from './tabs-with-router';
import type { FC } from 'react';
import type { ITabs } from './tabs';

const test: FC<ITabs> = (props) => {
    return <div style={{height: 1200}}><Tabs {...props}/></div>
}

const meta = {
    component: test,
} satisfies Meta<typeof test>;

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
                text: 'text',
                to: 'to',
            },
            {
                text: 'text',
                to: 'to',
            },
            {
                text: 'text',
                to: 'to',
            },
        ],
    },
};
