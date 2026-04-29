import type { Meta, StoryObj } from '@storybook/react-vite';

import { WithTooltip } from './withTooltip';

const meta = {
    component: WithTooltip,
} satisfies Meta<typeof WithTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
