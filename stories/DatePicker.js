import { action, storiesOf } from '@storybook/react';

import { DatePicker } from '../src';
import React from 'react';
import asUncontrolled from '../src/asUncontrolled';
import { boolean } from '@storybook/addon-knobs';

const UncontrolledDatePicker = asUncontrolled(DatePicker);

storiesOf('DatePicker', module)
  .addWithInfo('with props', () =>
    <UncontrolledDatePicker
      disabled={boolean('disabled', false)}
      onChange={action('onChange')}
    />
  )
  .addWithInfo('controlled', () => {
    class X extends React.Component {
      state = {
        value: ''
      };

      onChange = (value, date) => {
        this.setState({
          value,
          date: value === 'test' ? new Date('1991/01/01') : date
        });
      };

      render() {
        const { value, date } = this.state;
        return (
          <DatePicker date={date} value={value} onChange={this.onChange} />
        );
      }
    }

    return <X />;
  });
