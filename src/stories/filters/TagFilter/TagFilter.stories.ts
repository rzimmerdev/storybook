import { Meta, StoryObj } from '@storybook/react';
import { TagFilter } from './TagFilter.tsx';

const meta: Meta = {
    title: 'Core/TagFilter',
    component: TagFilter,
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
    args: {
        placeholder: 'Add fruits to basket',
        availableTags: ['apple', 'banana', 'orange', 'pear'],
        onTagsChange: (tags: string[]) => console.log(tags),
    },
};

export const Dynamic: Story = {
    args: {
        placeholder: 'Build your own basket!',
        availableTags: ['apple', 'banana', 'orange', 'pear'],
        fixedTags: false,
        uniqueTags: false,
        onTagsChange: (tags: string[]) => console.log(tags),
    },
};

``
