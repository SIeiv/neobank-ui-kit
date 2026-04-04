import type { Meta, StoryObj } from '@storybook/react-vite';

import { MenuIcon } from './menu-icon';

const meta = {
    component: MenuIcon,
} satisfies Meta<typeof MenuIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
