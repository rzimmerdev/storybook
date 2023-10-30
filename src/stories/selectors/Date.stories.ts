import { Meta, StoryObj } from '@storybook/react';
import { Date } from './Date.tsx';

const meta: Meta = {
    title: 'Core/Selectors/Date',
    component: Date,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};