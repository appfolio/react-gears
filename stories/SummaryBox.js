import React from 'react';
import { storiesOf } from '@storybook/react';

import SummaryBox from '../src/components/SummaryBox';
import SummaryBoxItem from '../src/components/SummaryBoxItem';
import { text } from '@storybook/addon-knobs';

const link = <a href="#">Link</a>;

const items = [
  { value: 'Alpha', label: 'Bravo' },
  { value: 'Charlie Brown', label: 'Delta' },
  { value: 'Echo' },
  { label: 'Hotel' }
];

storiesOf('SummaryBox', module)
  .addWithInfo('with items', () => (
    <SummaryBox items={items} />
  ))
  .addWithInfo('with children', () => (
    <SummaryBox>
      <SummaryBoxItem value={link} label="Bravo" />
      <SummaryBoxItem value="Charlie" />
      <SummaryBoxItem label="Foxtrot" />
      <SummaryBoxItem value="Golf" label="Hotel" />
      <SummaryBoxItem value="India" />
    </SummaryBox>
  ))
  .addWithInfo('SummaryBoxItem', () => (
    <SummaryBoxItem
      value={text('value', 'Live from New York')}
      label={text('label', 'It\'s Saturday Night')}
    />
  ));
