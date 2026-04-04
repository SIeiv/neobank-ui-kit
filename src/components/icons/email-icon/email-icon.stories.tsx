import type { Meta, StoryObj } from '@storybook/react-vite';

import { EmailIcon } from './email-icon';

const meta = {
    component: EmailIcon,
} satisfies Meta<typeof EmailIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
