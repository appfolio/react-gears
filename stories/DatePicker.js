import { action, storiesOf } from '@storybook/react';

import { DatePicker } from '../src';
import React from 'react';
import asUncontrolled from '../src/asUncontrolled';
import { boolean } from '@storybook/addon-knobs';

const UncontrolledDatePicker = asUncontrolled(DatePicker);

storiesOf('DatePicker', module)
  .addWithInfo('uncontrolled', () =>
    <UncontrolledDatePicker
      disabled={boolean('disabled', false)}
      onChange={action('onChange')}
    />
  )
  .addWithInfo('controlled', () => {
    class ControlledDatePicker extends React.Component {
      state = {
        value: ''
      };

      onChange = value => {
        this.setState({ value });
      };

      render() {
        return (
          <DatePicker value={this.state.value} onChange={this.onChange} />
        );
      }
    }

    return <ControlledDatePicker />;
  })
  .addWithInfo('controlled with custom date parsing', () => {
    class ControlledDatePickerWithDate extends React.Component {
      state = {
        value: ''
      };

      onChange = (value, date) => {
        this.setState({
          value,
          date: value === 'christmas' ? new Date('2017/12/25') : date
        });
      };

      render() {
        const { value, date } = this.state;
        return (
          <DatePicker date={date} value={value} onChange={this.onChange} />
        );
      }
    }

    return <ControlledDatePickerWithDate />;
  });;
