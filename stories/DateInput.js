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
      onChange={action('onChange')}
    />
  ))
  .addWithInfo('defaultValue', () => (
    <div>
      <p>
        When defaultValue is set, component is 'uncontrolled' and maintains its own state.
        onChange events will be emitted with the current value.
      </p>
      <FormRow type={DateInput} onChange={action('onChange')} label="null" />
      <FormRow type={DateInput} onChange={action('onChange')} label="new Date()" defaultValue={new Date()} />
      <FormRow type={DateInput} onChange={action('onChange')} label="new Date(2000, 0, 1)" defaultValue={new Date(2000, 0, 1)} />
      <FormRow type={DateInput} onChange={action('onChange')} label="'1/23/2004'" defaultValue="1/23/2004" />
      <FormRow type={DateInput} onChange={action('onChange')} label="'Garbage in'" defaultValue="Garbage in" />
    </div>
  ))
  .addWithInfo('value', () => (
    <div>
      <p>
        When value is set, component is 'controlled' and does not maintain its own state.
        onChange events will be emitted with the current value, and parent components using the DateInput must update the value prop with the current date.
      </p>
      <FormRow type={DateInput} onChange={action('onChange')} label="null" />
      <FormRow type={DateInput} onChange={action('onChange')} label="new Date()" value={new Date()} />
      <FormRow type={DateInput} onChange={action('onChange')} label="new Date(2000, 0, 1)" value={new Date(2000, 0, 1)} />
      <FormRow type={DateInput} onChange={action('onChange')} label="'1/23/2004'" value="1/23/2004" />
      <FormRow type={DateInput} onChange={action('onChange')} label="'Garbage in'" value="Garbage in" />
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
