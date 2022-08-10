import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import React from 'react';
import Steps from './Steps';

const steps = [
  'Put your left foot in',
  'Put your right foot out',
  'Do the Hokey-Pokey',
  'Turn yourself about',
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

export const Clickable = () => (
  <Steps
    steps={steps}
    step={number('step', 0)}
    complete={boolean('complete', false)}
    vertical={boolean('vertical', false)}
    collapse={boolean('collapse', false)}
    onStepClick={action('index')}
  />
);

export const Granular = () => (
  <Steps
    granular
    steps={steps}
    step={number('step', 0)}
    complete={boolean('complete', false)}
    vertical={boolean('vertical', false)}
    collapse={boolean('collapse', false)}
    onStepClick={action('index')}
    stepProgress={number('stepProgress', 30, {
      range: true,
      min: 0,
      max: 100,
      step: 1,
    })}
  />
);
