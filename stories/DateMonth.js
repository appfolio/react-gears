import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { DateMonth } from '../src';

storiesOf('DateMonth', module)
  .addWithInfo('with props', () => <DateMonth value="Nov 1979" />)
  .addWithInfo('with invalid props', () => <DateMonth value="some bad input" />);
