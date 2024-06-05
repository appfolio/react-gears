import { action } from '@storybook/addon-actions';
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
  parameters: {
    sourceLink: 'Steps/Steps.tsx',
  },
};

export const LiveExample = (args) => <Steps steps={steps} {...args} />;
LiveExample.args = {
  step: 0,
  complete: false,
  vertical: false,
  collapse: false,
};

export const Vertical = (args) => <Steps steps={steps} {...args} />;
Vertical.args = {
  step: 0,
  complete: false,
  vertical: true,
  collapse: false,
};

export const Clickable = (args) => <Steps steps={steps} {...args} />;
Clickable.args = {
  step: 0,
  complete: false,
  vertical: false,
  collapse: false,
  onStepClick: action('index'),
};

export const Granular = (args) => <Steps granular steps={steps} {...args} />;
Granular.args = {
  step: 0,
  complete: false,
  vertical: false,
  collapse: false,
  onStepClick: action('index'),
  stepProgress: 30,
};
Granular.argTypes = {
  stepProgress: {
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 1,
    },
  },
};
