import { number, select } from '@storybook/addon-knobs';
import React from 'react';
import { colors } from '../../tooling/colors';
import Placeholder from './Placeholder';

export default {
  title: 'Placeholder',
  component: Placeholder,
  parameters: {
    sourceLink: 'Placeholder/Placeholder.tsx',
  },
};

export const LiveExample = () => (
  <Placeholder
    color={select('color', ['', ...colors], undefined)}
    size={select('size', ['', 'xs', 'sm', 'lg'], undefined)}
    type={select('type', ['', 'glow', 'wave'], 'glow')}
    words={number('words', 1, undefined)}
  />
);

export const Words = () => (
  <div>
    <Placeholder words={1} />
    <Placeholder words={3} />
    <Placeholder words={5} />
    <Placeholder words={7} />
    <Placeholder words={9} />
  </div>
);

export const Widths = () => (
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
);

export const Sizes = () => (
  <div>
    xs:
    <Placeholder words={6} size="xs" type={select('type', ['', 'glow', 'wave'], 'glow')} />
    sm:
    <Placeholder words={5} size="sm" type={select('type', ['', 'glow', 'wave'], 'glow')} />
    default:
    <Placeholder words={7} type={select('type', ['', 'glow', 'wave'], 'glow')} />
    lg:
    <Placeholder words={4} size="lg" type={select('type', ['', 'glow', 'wave'], 'glow')} />
  </div>
);

export const Colors = () =>
  colors.map((color) => (
    <>
      {color}:
      <Placeholder
        color={color}
        size={select('size', ['', 'xs', 'sm', 'lg'], undefined)}
        type={select('type', ['', 'glow', 'wave'], 'glow')}
        words={number('words', 4, undefined)}
      />
    </>
  ));
