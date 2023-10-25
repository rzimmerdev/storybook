import { Meta, StoryObj } from '@storybook/react';
import { RadioFilter } from './RadioFilter';

const meta: Meta = {
    title: 'Core/RadioFilter',
    component: RadioFilter,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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