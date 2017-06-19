import React from 'react';
import { Calendar, DateInput } from '../src';
import { action, storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

storiesOf('DateInput', module)
  .addWithInfo('with props', () => (
    <DateInput
      dateFormat={text('dateFormat', DateInput.defaultProps.dateFormat)}
      defaultValue={text('defaultValue')}
      showOnFocus={boolean('showOnFocus', DateInput.defaultProps.showOnFocus)}
    />
  ))
  .addWithInfo('Calendar', () => (
    <div className="d-inline-flex">
      <Calendar
        dateFormat={text('dateFormat', Calendar.defaultProps.dateFormat)}
        onSelect={action('onSelect')}
      />
    </div>
  ));
