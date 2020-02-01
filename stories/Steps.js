import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs';
import { Steps } from '../src';

const steps = [
  'Put your left foot in',
  'Put your right foot out',
  'Do the Hokey-Pokey',
  'Turn yourself about'
];

storiesOf('Steps', module)
  .add('Live example', () => (
    <Steps
      steps={steps}
      step={number('step', 0)}
      complete={boolean('complete', false)}
      vertical={boolean('vertical', false)}
    />
  ))
  .add('Vertical steps', () => (
    <Steps
      steps={steps}
      step={number('step', 0)}
      complete={boolean('complete', false)}
      vertical={boolean('vertical', true)}
    />
  ));
