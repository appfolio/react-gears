import React from 'react';
import Highlight from './Highlight';

export default {
  title: 'Highlight',
  component: Highlight,
  parameters: {
    sourceLink: 'Highlight/Highlight.tsx',
  },
};

export const LiveExample = ({ children, ...args }) => <Highlight {...args}>{children}</Highlight>;
LiveExample.args = {
  caseSensitive: false,
  ignoreSpecial: false,
  pattern: 'dog',
  children: 'The quick brown fox jumps over the lazy dog.',
};

export const DOMNodesAsChildren = (args) => (
  <Highlight {...args}>
    <div>The quick brown fox jumps over the lazy dog.</div>
    <div>
      Henlo, I am doge. Gib treatos pls.
      <span>wowoweeow dogtor doglittle</span>
    </div>
  </Highlight>
);
DOMNodesAsChildren.args = {
  caseSensitive: false,
  ignoreSpecial: false,
  pattern: 'dog',
};

export const UseRegexAsPattern = (args) => (
  <Highlight {...args}>
    <div>The quick brown fox jumps over the lazy dog.</div>
    <div>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</div>
  </Highlight>
);
UseRegexAsPattern.args = {
  caseSensitive: false,
  ignoreSpecial: false,
  escape: false,
  pattern: '(fox)|(dog)',
};
