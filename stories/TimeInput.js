import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import { FormRow, TimeInput } from '../src';

const description = 'TimeInput supports typing times without colons. ' +
  'It also optionally supports times outside the initial list of options through the allowOtherTimes prop.';

storiesOf('TimeInput', module)
  .add('with props', description, () => (
    <div>
      <TimeInput
        allowOtherTimes={boolean('allowOtherTimes', true)}
        disabled={boolean('disabled', false)}
        max={text('max')}
        min={text('min')}
        onChange={action('onChange')}
        placeholder={text('placeholder', TimeInput.defaultProps.placeholder)}
        step={number('step', TimeInput.defaultProps.step)}
        timeFormat={text('timeFormat', TimeInput.defaultProps.timeFormat)}
      />
    </div>
  ))
  .add('defaultValue (uncontrolled)', () => (
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
  .add('value (controlled)', () => (
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
