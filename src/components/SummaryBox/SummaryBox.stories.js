import React from 'react';
import SummaryBox from './SummaryBox';
import SummaryBoxItem from './SummaryBoxItem';

const link = <a href="https://bravo.tv">Link</a>;

const items = [
  { value: 'Alpha', label: 'Bravo' },
  { value: 'Charlie Brown', label: 'Delta' },
  { value: 'Echo' },
  { label: 'Hotel' },
];

export default {
  title: 'SummaryBox',
  component: SummaryBox,
  parameters: {
    sourceLink: 'SummaryBox/SummaryBox.tsx',
  },
};

export const WithItems = (args) => <SummaryBox items={items} {...args} />;
WithItems.args = {
  reverse: SummaryBox.defaultProps.reverse,
};

export const WithChildren = (args) => (
  <SummaryBox {...args}>
    <SummaryBoxItem value={link} label="Bravo" />
    <SummaryBoxItem value="Charlie" />
    <SummaryBoxItem label="Foxtrot" />
    <SummaryBoxItem value="Golf" label="Hotel" />
    <SummaryBoxItem value="India" />
  </SummaryBox>
);
WithChildren.args = {
  reverse: SummaryBox.defaultProps.reverse,
};

export const SummaryBoxItemExample = (args) => <SummaryBoxItem {...args} />;
SummaryBoxItemExample.args = {
  value: 'Live from New York',
  label: "It's Saturday Night",
  reverse: SummaryBoxItem.defaultProps.reverse,
};
