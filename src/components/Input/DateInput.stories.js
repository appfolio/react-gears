import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
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

export const WithProps = () => (
  <div>
    <DateInput
      dateFormat={text('dateFormat', DateInput.defaultProps.dateFormat)}
      showOnFocus={boolean('showOnFocus', DateInput.defaultProps.showOnFocus)}
      direction={text('direction', 'down')}
      disabled={boolean('disabled', DateInput.defaultProps.disabled)}
      readOnly={boolean('readOnly', false)}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      onClose={action('onClose')}
      positionFixed={boolean('positionFixed', false)}
    />
  </div>
);

export const WithId = () => (
  <div>
    <Label for="calendar">Click this label to Focus Calendar Input:</Label>
    <DateInput
      id="calendar"
      dateFormat={text('dateFormat', DateInput.defaultProps.dateFormat)}
      showOnFocus={boolean('showOnFocus', DateInput.defaultProps.showOnFocus)}
      disabled={boolean('disabled', DateInput.defaultProps.disabled)}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
    />
  </div>
);

export const UncontrolledDefaultValue = () => (
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

export const ValueControlled = () => (
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

export const CustomHeaderAndFooter = () => (
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
    />
  </div>
);

export const DateEnabled = () => (
  <div className="d-inline-flex">
    <DateInput dateEnabled={(date) => date.getDay() > 0 && date.getDay() < 6} />
  </div>
);

export const CalendarDefault = () => (
  <div className="d-inline-flex">
    <Calendar dateFormat={text('dateFormat', 'D')} onSelect={action('onSelect')} />
  </div>
);

export const CalendarCustomDay = () => (
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
    />
  </div>
);
