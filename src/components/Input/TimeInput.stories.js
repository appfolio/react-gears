import { action } from '@storybook/addon-actions';
import React from 'react';
import FormRow from '../Form/FormRow';
import TimeInput from './TimeInput';

export default {
  title: 'TimeInput',
  component: TimeInput,
  parameters: {
    sourceLink: 'Input/TimeInput.js',
  },
  argTypes: {
    max: {
      control: 'text',
    },
    min: {
      control: 'text',
    },
  },
};

export const WithProps = (args) => (
  <div>
    <TimeInput {...args} />
  </div>
);
WithProps.args = {
  allowOtherTimes: true,
  disabled: false,
  max: undefined,
  min: undefined,
  onChange: action('onChange'),
  placeholder: TimeInput.defaultProps.placeholder,
  step: TimeInput.defaultProps.step,
  timeFormat: TimeInput.defaultProps.timeFormat,
};

export const DefaultValueUncontrolled = () => (
  <div>
    <p>
      When defaultValue is set, component is &apos;uncontrolled&apos; and maintains its own state.
      onChange events will be emitted with the current value.
    </p>
    <FormRow type={TimeInput} onChange={action('onChange')} label="null" />
    <FormRow type={TimeInput} onChange={action('onChange')} label="09:00" defaultValue="09:00" />
    <FormRow
      type={TimeInput}
      onChange={action('onChange')}
      label="'Garbage in'"
      defaultValue="Garbage in"
    />
  </div>
);

export const ValueControlled = () => (
  <div>
    <p>
      When value is set, component is &apos;controlled&apos; and does not maintain its own state.
      onChange events will be emitted with the current value, and parent components using the
      DateInput must update the value prop with the current date.
    </p>
    <FormRow type={TimeInput} onChange={action('onChange')} label="null" value={null} />
    <FormRow type={TimeInput} onChange={action('onChange')} label="09:00" value="09:00" />
    <FormRow
      type={TimeInput}
      onChange={action('onChange')}
      label="'Garbage in'"
      value="Garbage in"
    />
  </div>
);
