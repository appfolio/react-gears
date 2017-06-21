import React from 'react';
import { Calendar, DateInput, FormRow } from '../src';
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
  .addWithInfo('defaultValue', () => (
    <div>
      <FormRow type={DateInput} label="null" />
      <FormRow type={DateInput} label="new Date()" defaultValue={new Date()} />
      <FormRow type={DateInput} label="new Date(2000, 0, 1)" defaultValue={new Date(2000, 0, 1)} />
      <FormRow type={DateInput} label="'1/23/2004'" defaultValue="1/23/2004" />
      <FormRow type={DateInput} label="'Garbage in'" defaultValue="Garbage in" />
    </div>
  ))
  .addWithInfo('Calendar', () => (
    <div className="d-inline-flex">
      <Calendar
        dateFormat={text('dateFormat', Calendar.defaultProps.dateFormat)}
        onSelect={action('onSelect')}
      />
    </div>
  ));
