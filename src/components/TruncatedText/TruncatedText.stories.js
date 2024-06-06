import React from 'react';
import TruncatedText from './TruncatedText';

export default {
  title: 'TruncatedText',
  component: TruncatedText,
  parameters: {
    sourceLink: 'TruncatedText/TruncatedText.tsx',
  },
};

export const LiveExample = (args) => (
  <div>
    <TruncatedText targetId="TruncatedTextExample" {...args} />
  </div>
);
LiveExample.args = {
  charLimit: 20,
  text: 'The quick brown fox jumps over the lazy dog',
  tooltip: true,
  placement: undefined,
};
LiveExample.argTypes = {
  placement: {
    control: { type: 'select' },
    options: ['top', 'bottom', 'left', 'right'],
  },
};
