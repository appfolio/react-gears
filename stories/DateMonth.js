import React from 'react';
import { storiesOf } from '@storybook/react';

import { DateMonth } from '../src';

storiesOf('DateMonth', module)
  .addWithInfo('with props', () => <DateMonth value="Nov 1979" />)
  .addWithInfo('with invalid props', () => <DateMonth value="some bad input" />);
