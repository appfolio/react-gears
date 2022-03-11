import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import { MonthCalendar, MonthInput, Icon, FormRow } from '../src';

export default {
  title: 'MonthInput',
  component: MonthInput,
};

export const WithProps = () => (
  <div className="d-flex">
    <MonthInput
      dateFormat={text('dateFormat', MonthInput.defaultProps.dateFormat)}
      monthFormat={text('monthFormat', MonthInput.defaultProps.monthFormat)}
      yearFormat={text('yearFormat', MonthInput.defaultProps.yearFormat)}
      showOnFocus={boolean('showOnFocus', MonthInput.defaultProps.showOnFocus)}
      disabled={boolean('disabled', MonthInput.defaultProps.disabled)}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
    />
  </div>
);

export const DefaultValueUncontrolled = () => (
  <div>
    <p>
      When defaultValue is set, component is 'uncontrolled' and maintains its own state. onChange
      events will be emitted with the current value.
    </p>
    <FormRow type={MonthInput} onChange={action('onChange')} label="null" />
    <FormRow
      type={MonthInput}
      onChange={action('onChange')}
      label="new Date()"
      defaultValue={new Date()}
    />
    <FormRow
      type={MonthInput}
      onChange={action('onChange')}
      label="new Date(2000, 0, 1)"
      defaultValue={new Date(2000, 0, 1)}
    />
    <FormRow
      type={MonthInput}
      onChange={action('onChange')}
      label="'1/23/2004'"
      defaultValue="1/23/2004"
    />
    <FormRow
      type={MonthInput}
      onChange={action('onChange')}
      label="'Garbage in'"
      defaultValue="Garbage in"
    />
  </div>
);

export const ValueControlled = () => (
  <div>
    <p>
      When value is set, component is 'controlled' and does not maintain its own state. onChange
      events will be emitted with the current value, and parent components using the MonthInput must
      update the value prop with the current date.
    </p>
    <FormRow type={MonthInput} onChange={action('onChange')} label="null" value={null} />
    <FormRow
      type={MonthInput}
      onChange={action('onChange')}
      label="new Date()"
      value={new Date()}
    />
    <FormRow
      type={MonthInput}
      onChange={action('onChange')}
      label="new Date(2000, 0, 1)"
      value={new Date(2000, 0, 1)}
    />
    <FormRow type={MonthInput} onChange={action('onChange')} label="'Mar 2004'" value="Mar 2004" />
    <FormRow
      type={MonthInput}
      onChange={action('onChange')}
      label="'Garbage in'"
      value="Garbage in"
    />
  </div>
);

export const CustomHeaderAndFooter = () => (
  <div className="d-inline-flex">
    <MonthInput
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

export const MonthCalendarExample = () => (
  <div className="d-inline-flex">
    <MonthCalendar
      monthFormat={text('monthFormat', MonthCalendar.defaultProps.monthFormat)}
      yearFormat={text('yearFormat', MonthCalendar.defaultProps.yearFormat)}
      onSelect={action('onSelect')}
    />
  </div>
);
