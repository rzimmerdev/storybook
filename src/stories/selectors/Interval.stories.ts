import { Meta, StoryObj } from '@storybook/react';
import { Interval } from './Interval.tsx';

const meta: Meta = {
    title: 'Core/Selectors/Interval',
    component: Interval,
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