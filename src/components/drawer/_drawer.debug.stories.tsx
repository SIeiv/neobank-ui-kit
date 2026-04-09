import type { Meta, StoryObj } from '@storybook/react-vite';

import { DrawerDebug } from './_drawer.debug';

const meta = {
    component: DrawerDebug,
} satisfies Meta<typeof DrawerDebug>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
