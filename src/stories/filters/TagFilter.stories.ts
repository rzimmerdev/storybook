import { Meta, StoryObj } from '@storybook/react';
import { TagFilter } from './TagFilter';

const meta: Meta = {
    title: 'Core/TagFilter',
    component: TagFilter,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tags: ['Sample1', 'Sample2', 'Sample3'],
        suggested: true,
        sampleTags: ['Sample ...'],
        selectedTags: [],
        onTagsChanged: (selectedTags: string[]) => {
            console.log('Updated tags:', selectedTags);
        },
    },
};
``
