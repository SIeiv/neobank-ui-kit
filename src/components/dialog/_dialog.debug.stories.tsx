import type { Meta, StoryObj } from '@storybook/react-vite';

import { DialogDebug } from './_dialog.debug';

const meta = {
    component: DialogDebug,
} satisfies Meta<typeof DialogDebug>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
