import React from 'react';
import { colors } from '../../tooling/colors';
import Placeholder from './Placeholder';

const meta = {
  title: 'Placeholder',
  component: Placeholder,
  parameters: {
    sourceLink: 'Placeholder/Placeholder.tsx',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['', ...colors],
    },
    size: {
      control: { type: 'select' },
      options: ['', 'xs', 'sm', 'lg'],
    },
    type: {
      control: { type: 'select' },
      options: ['', 'glow', 'wave'],
    },
  },
};
export default meta;

export const LiveExample = {
  args: {
    color: undefined,
    size: undefined,
    type: 'glow',
    words: 1,
  },
};

export const Words = {
  render: () => (
    <div>
      <Placeholder words={1} />
      <Placeholder words={3} />
      <Placeholder words={5} />
      <Placeholder words={7} />
      <Placeholder words={9} />
    </div>
  ),
};

export const Widths = {
  render: () => (
    <div>
      100: <Placeholder width={100} />
      75: <Placeholder width={75} />
      50: <Placeholder width={50} />
      25: <Placeholder width={25} />
      <h2>Min width:</h2>
      100: <Placeholder minWidth={100} />
      75: <Placeholder minWidth={75} />
      50: <Placeholder minWidth={50} />
      25: <Placeholder minWidth={25} />
    </div>
  ),
};

export const Sizes = {
  args: {
    type: 'glow',
  },
  render: (args) => (
    <div>
      xs:
      <Placeholder words={6} size="xs" {...args} />
      sm:
      <Placeholder words={5} size="sm" {...args} />
      default:
      <Placeholder words={7} {...args} />
      lg:
      <Placeholder words={4} size="lg" {...args} />
    </div>
  ),
};

export const Colors = {
  args: {
    size: undefined,
    type: 'glow',
    words: 4,
  },
  render: (args) =>
    colors.map((color) => (
      <>
        {color}:
        <Placeholder color={color} {...args} />
      </>
    )),
};
