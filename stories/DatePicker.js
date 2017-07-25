import { action, storiesOf } from '@storybook/react';

import { DatePicker } from '../src';
import React from 'react';
import asUncontrolled from '../src/asUncontrolled';
import { boolean } from '@storybook/addon-knobs';

const UncontrolledDatePicker = asUncontrolled(DatePicker);

storiesOf('DatePicker', module).addWithInfo('with props', () =>
  <UncontrolledDatePicker
    disabled={boolean('disabled', false)}
    onChange={action('onChange')}
  />
);
