import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { Highlight } from '../src/index';

export default {
  title: 'Highlight',
  component: Highlight,
};

export const LiveExample = () => (
  <Highlight caseSensitive={boolean('caseSensitive', false)} ignoreSpecial={boolean('ignoreSpecial', false)} pattern={text('pattern', 'dog')}>
    {text('children', 'The quick brown fox jumps over the lazy dog.')}
  </Highlight>
);

export const DOMNodesAsChildren = () => (
  <Highlight caseSensitive={boolean('caseSensitive', false)} ignoreSpecial={boolean('ignoreSpecial', false)} pattern={text('pattern', 'dog')}>
    <div>The quick brown fox jumps over the lazy dog.</div>
    <div>
      Henlo, I am doge. Gib treatos pls.
      <span>wowoweeow dogtor doglittle</span>
    </div>
  </Highlight>
);

export const UseRegexAsPattern = () => (
  <Highlight caseSensitive={boolean('caseSensitive', false)} ignoreSpecial={boolean('ignoreSpecial', false)} escape={boolean('escape', false)} pattern={text('pattern', '(fox)|(dog)')}>
    <div>The quick brown fox jumps over the lazy dog.</div>
    <div>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</div>
  </Highlight>
);
