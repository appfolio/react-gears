import { action } from '@storybook/addon-actions';
import React from 'react';
import FormRow from '../Form/FormRow';
import Icon from '../Icon/Icon';
import MonthInput from './MonthInput';

export default {
  title: 'MonthInput',
  component: MonthInput,
  parameters: {
    sourceLink: 'Input/MonthInput.js',
  },
};

export const WithProps = (args) => (
  <div className="d-flex">
    <MonthInput {...args} />
  </div>
);
WithProps.args = {
  centerYearSelection: MonthInput.defaultProps.centerYearSelection,
  dateFormat: MonthInput.defaultProps.dateFormat,
  monthFormat: MonthInput.defaultProps.monthFormat,
  yearFormat: MonthInput.defaultProps.yearFormat,
  showOnFocus: MonthInput.defaultProps.showOnFocus,
  disabled: MonthInput.defaultProps.disabled,
  onBlur: action('onBlur'),
  onChange: action('onChange'),
};

// declaring any arguments is required to enable displaying code in storybook docs
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const DefaultValueUncontrolled = (args) => (
  <div>
    <p>
      When defaultValue is set, component is &apos;uncontrolled&apos; and maintains its own state.
      onChange events will be emitted with the current value.
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

// declaring any arguments is required to enable displaying code in storybook docs
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const ValueControlled = (args) => (
  <div>
    <p>
      When value is set, component is &apos;uncontrolled&apos; and does not maintain its own state.
      onChange events will be emitted with the current value, and parent components using the
      MonthInput must update the value prop with the current date.
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

export const CustomHeaderAndFooter = (args) => (
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
      {...args}
    />
  </div>
);
