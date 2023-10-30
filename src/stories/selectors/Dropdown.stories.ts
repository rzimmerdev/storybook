import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown.tsx';

const meta: Meta = {
    title: 'Core/Selectors/Dropdown',
    component: Dropdown,
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