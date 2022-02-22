import React from 'react';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { TruncatedText } from '../src';

export default {
  title: 'TruncatedText',
  component: TruncatedText,
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
