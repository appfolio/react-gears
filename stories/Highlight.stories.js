import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { Highlight } from '../src/index';

storiesOf('Highlight', module)
  .add('Live example', () => (
    <Highlight caseSensitive={boolean('caseSensitive', false)} ignoreSpecial={boolean('ignoreSpecial', false)} pattern={text('pattern', 'dog')}>
      {text('children', 'The quick brown fox jumps over the lazy dog.')}
    </Highlight>
  ))
  .add('DOM nodes as children', () => (
    <Highlight caseSensitive={boolean('caseSensitive', false)} ignoreSpecial={boolean('ignoreSpecial', false)} pattern={text('pattern', 'dog')}>
      <div>The quick brown fox jumps over the lazy dog.</div>
      <div>
        Henlo, I am doge. Gib treatos pls.
        <span>wowoweeow dogtor doglittle</span>
      </div>
    </Highlight>
  ));
