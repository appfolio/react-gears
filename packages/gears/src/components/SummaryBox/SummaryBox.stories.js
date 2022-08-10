import { boolean, text } from '@storybook/addon-knobs';
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
};

export const WithItems = () => (
  <SummaryBox items={items} reverse={boolean('reverse', SummaryBox.defaultProps.reverse)} />
);

export const WithChildren = () => (
  <SummaryBox reverse={boolean('reverse', SummaryBox.defaultProps.reverse)}>
    <SummaryBoxItem value={link} label="Bravo" />
    <SummaryBoxItem value="Charlie" />
    <SummaryBoxItem label="Foxtrot" />
    <SummaryBoxItem value="Golf" label="Hotel" />
    <SummaryBoxItem value="India" />
  </SummaryBox>
);

export const SummaryBoxItemExample = () => (
  <SummaryBoxItem
    value={text('value', 'Live from New York')}
    label={text('label', "It's Saturday Night")}
    reverse={boolean('reverse', SummaryBoxItem.defaultProps.reverse)}
  />
);
