import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { boolean, number } from '@kadira/storybook-addon-knobs';

import { Steps } from '../src';

const steps = [
  'Put your left foot in',
  'Put your right foot out',
  'Do the Hokey-Pokey',
  'Turn yourself about'
];

storiesOf('Steps', module)
  .addWithInfo('Live example', () => (
    <Steps
      steps={steps}
      step={number('step', 0)}
      complete={boolean('complete', false)}
    />
  ));
