import { Meta, StoryObj } from '@storybook/react';
import { TextFilter } from './TextFilter.tsx';

const meta: Meta = {
    title: 'Core/TextFilter',
    component: TextFilter,
    parameters: {
        layout: 'centered',
        // This component will have an automatically generated Autodocs entry
        tags: ['autodocs'],
        // More on argTypes
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryObj = {
    args: {
        items: [
            'Apple',
            'Banana',
            'Cherry',
            'Date',
            'Fig',
            'Grape',
            'Lemon',
            'Mango',
            'Orange',
            'Peach',
            'Pear',
            'Strawberry',
            'Watermelon',
        ],
    },
};

export const FilteredItems: StoryObj = {
    name: 'Filtered Items',
    args: {
        items: [
            'Apple',
            'Banana',
            'Cherry',
            'Date',
            'Fig',
            'Grape',
            'Lemon',
            'Mango',
            'Orange',
            'Peach',
            'Pear',
            'Strawberry',
            'Watermelon',
        ],
    },
};

export const EmptyItems: Story = {
    name: 'Empty Items',
    args: {
        items: [],
    },
};
