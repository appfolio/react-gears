import React from 'react';
import { Calendar, DateInput, Icon, FormRow, Label } from '../src';
import { action, storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

storiesOf('DateInput', module)
  .addWithInfo('with props', () => (
    <div>
      <DateInput
        dateFormat={text('dateFormat', DateInput.defaultProps.dateFormat)}
        showOnFocus={boolean('showOnFocus', DateInput.defaultProps.showOnFocus)}
        disabled={boolean('disabled', DateInput.defaultProps.disabled)}
        readOnly={boolean('readOnly', false)}
        onBlur={action('onBlur')}
        onChange={action('onChange')}
        onClose={action('onClose')}
      />
    </div>
  ))
  .addWithInfo('with id', () => (
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
  ))
  .addWithInfo('defaultValue (uncontrolled)', () => (
    <div>
      <p>
        When defaultValue is set, component is 'uncontrolled' and maintains its
        own state. onChange events will be emitted with the current value.
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
  ))
  .addWithInfo('value (controlled)', () => (
    <div>
      <p>
        When value is set, component is 'controlled' and does not maintain its
        own state. onChange events will be emitted with the current value, and
        parent components using the DateInput must update the value prop with
        the current date.
      </p>
      <FormRow
        type={DateInput}
        onChange={action('onChange')}
        label="null"
        value={null}
      />
      <FormRow
        type={DateInput}
        onChange={action('onChange')}
        label="new Date()"
        value={new Date()}
      />
      <FormRow
        type={DateInput}
        onChange={action('onChange')}
        label="new Date(2000, 0, 1)"
        value={new Date(2000, 0, 1)}
      />
      <FormRow
        type={DateInput}
        onChange={action('onChange')}
        label="'1/23/2004'"
        value="1/23/2004"
      />
      <FormRow
        type={DateInput}
        onChange={action('onChange')}
        label="'Garbage in'"
        value="Garbage in"
      />
    </div>
  ))
  .addWithInfo('Custom header and footer', () => (
    <div className="d-inline-flex">
      <DateInput
        header={
          <h2 className="text-center text-danger p-2 font-italic">PIRELLI</h2>
        }
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
  ))
  .addWithInfo('Calendar', () => (
    <div className="d-inline-flex">
      <Calendar
        dateFormat={text('dateFormat', Calendar.defaultProps.dateFormat)}
        onSelect={action('onSelect')}
      />
    </div>
  ));

storiesOf('DateInput/Integration', module).add('some test', () => (
  <DateInput />
));
