import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { HelpBubble } from '../src';

storiesOf('Help Bubble', module)
  .add('Live example', () => (
    <div>
      <p>
        I can be placed in context to provide some contextual help!
        <HelpBubble title={text('title', 'What does this mean?')} className="ml-1" placement={select('placement', ['top', 'left', 'bottom', 'right'], 'bottom')}>
          {text('content', 'Help bubbles are a handy way of explaining things.')}
        </HelpBubble>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat urna id pretium
        maximus. Phasellus ut cursus lectus. Ut at lobortis enim. In id enim luctus mi facilisis
        dapibus nec a nunc. Praesent vel facilisis erat. Donec porttitor ipsum at lacinia vehicula.
        Sed tristique tempor ante finibus imperdiet.
      </p>
    </div>
  ));
