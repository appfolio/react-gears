import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { HelpBubble } from '../src';

storiesOf('Help Bubble', module)
  .addWithInfo('Default', () => (
    <div>
      <p>
        I can be placed in context to provide some contextual help!
        <HelpBubble title="What does this mean?" className="ml-1" placement="bottom">
          Help bubbles are a handy way of explaining things.
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
