import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import SummaryBox from '../src/components/SummaryBox';
import SummaryBoxItem from '../src/components/SummaryBoxItem';

const link = <a href="https://bravo.tv">Link</a>;

const items = [
  { value: 'Alpha', label: 'Bravo' },
  { value: 'Charlie Brown', label: 'Delta' },
  { value: 'Echo' },
  { label: 'Hotel' }
];

storiesOf('SummaryBox', module)
  .add('with items', () => (
    <SummaryBox items={items} reverse={boolean('reverse', SummaryBox.defaultProps.reverse)} />
  ))
  .add('with children', () => (
    <SummaryBox reverse={boolean('reverse', SummaryBox.defaultProps.reverse)}>
      <SummaryBoxItem value={link} label="Bravo" />
      <SummaryBoxItem value="Charlie" />
      <SummaryBoxItem label="Foxtrot" />
      <SummaryBoxItem value="Golf" label="Hotel" />
      <SummaryBoxItem value="India" />
    </SummaryBox>
  ))
  .add('SummaryBoxItem', () => (
    <SummaryBoxItem
      value={text('value', 'Live from New York')}
      label={text('label', 'It\'s Saturday Night')}
      reverse={boolean('reverse', SummaryBoxItem.defaultProps.reverse)}
    />
  ));
