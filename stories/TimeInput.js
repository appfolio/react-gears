import React from 'react';
import { FormRow, TimeInput } from '../src';
import { action, storiesOf } from '@storybook/react';
import { boolean, number, text } from '@storybook/addon-knobs';

storiesOf('TimeInput', module)
  .addWithInfo('with props', () => (
    <div>
      <TimeInput
        allowOtherTimes={boolean('allowOtherTimes', true)}
        disabled={boolean('disabled', false)}
        max={text('max')}
        min={text('min')}
        onChange={action('onChange')}
        placeholder={text('placeholder', 'Select a time')}
        step={number('step', TimeInput.defaultProps.step)}
        timeFormat={text('timeFormat', TimeInput.defaultProps.timeFormat)}
      />
    </div>
  ))
  .addWithInfo('defaultValue (uncontrolled)', () => (
    <div>
      <p>
        When defaultValue is set, component is 'uncontrolled' and maintains its own state.
        onChange events will be emitted with the current value.
      </p>
      <FormRow type={TimeInput} onChange={action('onChange')} label="null" />
      <FormRow type={TimeInput} onChange={action('onChange')} label="09:00" defaultValue="09:00" />
      <FormRow type={TimeInput} onChange={action('onChange')} label="'Garbage in'" defaultValue="Garbage in" />
    </div>
  ))
  .addWithInfo('value (controlled)', () => (
    <div>
      <p>
        When value is set, component is 'controlled' and does not maintain its own state.
        onChange events will be emitted with the current value, and parent components using the DateInput must update the value prop with the current date.
      </p>
      <FormRow type={TimeInput} onChange={action('onChange')} label="null" value={null} />
      <FormRow type={TimeInput} onChange={action('onChange')} label="09:00" value="09:00" />
      <FormRow type={TimeInput} onChange={action('onChange')} label="'Garbage in'" value="Garbage in" />
    </div>
  ));
