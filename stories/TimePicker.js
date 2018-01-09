import React from 'react';
import { TimePicker } from '../src';
import { storiesOf } from '@storybook/react';

storiesOf('TimePicker', module)
  .addWithInfo('with props', () => (
    <div>
      <TimePicker startTime="03:00" endTime="21:00" defaultValue="17:00" />
    </div>
  ));
