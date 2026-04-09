import type { Meta, StoryObj } from '@storybook/react-vite';

import { Overlay } from './overlay';

const meta = {
    component: Overlay,
} satisfies Meta<typeof Overlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        activeState: true,
        setter: () => {}
    },
};
