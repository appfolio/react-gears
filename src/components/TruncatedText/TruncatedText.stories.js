import { boolean, number, select, text } from '@storybook/addon-knobs';
import React from 'react';
import TruncatedText from './TruncatedText';

export default {
  title: 'TruncatedText',
  component: TruncatedText,
  parameters: {
    sourceLink: 'TruncatedText/TruncatedText.tsx',
  },
};

export const LiveExample = () => (
  <div>
    <TruncatedText
      targetId="TruncatedTextExample"
      charLimit={number('charLimit', 20)}
      text={text('text', 'The quick brown fox jumps over the lazy dog')}
      tooltip={boolean('tooltip', true)}
      placement={select('placement', ['top', 'bottom', 'left', 'right'])}
    />
  </div>
);
