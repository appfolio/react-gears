import React from 'react';
import HelpBubble from './HelpBubble';

export default {
  title: 'HelpBubble',
  component: HelpBubble,
  parameters: {
    sourceLink: 'HelpBubble/HelpBubble.tsx',
  },
};

export const LiveExample = ({ title, placement, content }) => (
  <div>
    <p>
      I can be placed in context to provide some contextual help!
      <HelpBubble title={title} className="ms-1" placement={placement}>
        {content}
      </HelpBubble>
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat urna id pretium maximus.
      Phasellus ut cursus lectus. Ut at lobortis enim. In id enim luctus mi facilisis dapibus nec a
      nunc. Praesent vel facilisis erat. Donec porttitor ipsum at lacinia vehicula. Sed tristique
      tempor ante finibus imperdiet.
    </p>
  </div>
);
LiveExample.args = {
  title: 'What does this mean?',
  placement: 'bottom',
  content: 'Help bubbles are a handy way of explaining things.',
};
LiveExample.argTypes = {
  placement: {
    control: {
      type: 'select',
      options: ['top', 'left', 'bottom', 'right'],
    },
  },
};
