import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { Highlight } from '../src/index';

storiesOf('Highlight', module)
  .add('Live example', () => (
    <Highlight caseSensitive={boolean('caseSensitive', false)} pattern={text('pattern', 'dog')}>
      {text('children', 'The quick brown fox jumps over the lazy dog.')}
    </Highlight>
  ));
