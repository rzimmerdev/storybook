import type { StoryObj } from '@storybook/react';
import { ScatterGraph } from './ScatterGraph.tsx';

const meta = {
    title: 'Dashboard/ScatterGraph',
    component: ScatterGraph, // Use the ScatterGraph component
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Define your scatter plot data and pass it as an argument
const scatterData = [
    {
        x: [1, 2, 3, 4, 5],
        y: [2, 4, 1, 3, 5],
        mode: 'markers',
        type: 'scatter',
    },
];

export const Default: Story = {
    args: {
        data: scatterData, // Pass your scatter plot data here
        layout: {
            title: 'Scatter Plot Example',
        },
        config: {
            displayModeBar: true,
        },
    },
};

export const ConnectDots: Story = {
    name: 'Lines',
    args: {
        data: scatterData,
        layout: {
            title: 'Scatter Plot Example',
        },
        config: {
            displayModeBar: true,
        },
        lines: true, // New argument to control connecting the dots with lines
    },
};