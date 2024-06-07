import { action } from '@storybook/addon-actions';
import classNames from 'classnames';
import React from 'react';
import Calendar from '../Calendar/Calendar';
import FormRow from '../Form/FormRow';
import Icon from '../Icon/Icon';
import Label from '../Label/Label';
import DateInput from './DateInput';

export default {
  title: 'DateInput',
  component: DateInput,
  parameters: {
    sourceLink: 'Input/DateInput.js',
  },
};

export const WithProps = (args) => (
  <div>
    <DateInput {...args} />
  </div>
);
WithProps.args = {
  dateFormat: DateInput.defaultProps.dateFormat,
  showOnFocus: DateInput.defaultProps.showOnFocus,
  direction: 'down',
  disabled: DateInput.defaultProps.disabled,
  readOnly: false,
  onBlur: action('onBlur'),
  onChange: action('onChange'),
  onClose: action('onClose'),
  positionFixed: false,
};

export const WithId = (args) => (
  <div>
    <Label for="calendar">Click this label to Focus Calendar Input:</Label>
    <DateInput id="calendar" {...args} />
  </div>
);
WithId.args = {
  dateFormat: DateInput.defaultProps.dateFormat,
  showOnFocus: DateInput.defaultProps.showOnFocus,
  disabled: DateInput.defaultProps.disabled,
  onBlur: action('onBlur'),
  onChange: action('onChange'),
};

// declaring any arguments is required to enable displaying code in storybook docs
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const UncontrolledDefaultValue = (args) => (
  <div>
    <p>
      When defaultValue is set, component is &apos;uncontrolled&apos; and maintains its own state.
      onChange events will be emitted with the current value.
    </p>
    <FormRow type={DateInput} onChange={action('onChange')} label="null" />
    <FormRow
      type={DateInput}
      onChange={action('onChange')}
      label="new Date()"
      defaultValue={new Date()}
    />
    <FormRow
      type={DateInput}
      onChange={action('onChange')}
      label="new Date(2000, 0, 1)"
      defaultValue={new Date(2000, 0, 1)}
    />
    <FormRow
      type={DateInput}
      onChange={action('onChange')}
      label="'1/23/2004'"
      defaultValue="1/23/2004"
    />
    <FormRow
      type={DateInput}
      onChange={action('onChange')}
      label="'Garbage in'"
      defaultValue="Garbage in"
    />
  </div>
);

// declaring any arguments is required to enable displaying code in storybook docs
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const ValueControlled = (args) => (
  <div>
    <p>
      When value is set, component is &apos;controlled&apos; and does not maintain its own state.
      onChange events will be emitted with the current value, and parent components using the
      DateInput must update the value prop with the current date.
    </p>
    <FormRow type={DateInput} onChange={action('onChange')} label="null" value={null} />
    <FormRow type={DateInput} onChange={action('onChange')} label="new Date()" value={new Date()} />
    <FormRow
      type={DateInput}
      onChange={action('onChange')}
      label="new Date(2000, 0, 1)"
      value={new Date(2000, 0, 1)}
    />
    <FormRow type={DateInput} onChange={action('onChange')} label="'1/23/2004'" value="1/23/2004" />
    <FormRow
      type={DateInput}
      onChange={action('onChange')}
      label="'Garbage in'"
      value="Garbage in"
    />
  </div>
);

export const CustomHeaderAndFooter = (args) => (
  <div className="d-inline-flex">
    <DateInput
      header={<h2 className="text-center text-danger p-2 font-italic">PIRELLI</h2>}
      footer={
        <div className="d-flex justify-content-around p-3">
          <Icon name="flag-checkered" />
          <Icon name="flag-checkered" />
          <Icon name="flag-checkered" />
          <Icon name="flag-checkered" />
          <Icon name="flag-checkered" />
        </div>
      }
      {...args}
    />
  </div>
);

export const DateEnabled = (args) => (
  <div className="d-inline-flex">
    <DateInput dateEnabled={(date) => date.getDay() > 0 && date.getDay() < 6} {...args} />
  </div>
);

export const CalendarDefault = (args) => (
  <div className="d-inline-flex">
    <Calendar {...args} />
  </div>
);
CalendarDefault.args = {
  dateFormat: 'D',
  onSelect: action('onSelect'),
};

export const CalendarCustomDay = (args) => (
  <div className="d-inline-flex">
    <Calendar
      renderDay={(day) => {
        const className = classNames('px-2 py-1 text-center', {
          'text-danger': !day.future,
          'text-muted': !day.sameMonth,
          'text-white bg-primary': day.date.getDate() === 24,
          'bg-info': day.date.getDate() === 28,
        });
        return (
          <td className={className}>
            <div>{day.future ? day.date.getDate() : '✘'}</div>
          </td>
        );
      }}
      {...args}
    />
  </div>
);
