import React from 'react';
import { boolean, number } from '@storybook/addon-knobs';
import { Steps } from '../src';

const steps = [
  'Put your left foot in',
  'Put your right foot out',
  'Do the Hokey-Pokey',
  'Turn yourself about'
];

export default {
  title: 'Steps',
  component: Steps,
};

export const LiveExample = () => (
  <Steps
    steps={steps}
    step={number('step', 0)}
    complete={boolean('complete', false)}
    vertical={boolean('vertical', false)}
    collapse={boolean('collapse', false)}
  />
);

export const Vertical = () => (
  <Steps
    steps={steps}
    step={number('step', 0)}
    complete={boolean('complete', false)}
    vertical={boolean('vertical', true)}
    collapse={boolean('collapse', false)}
  />
);
