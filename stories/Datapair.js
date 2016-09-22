import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Datapair from '../src/components/datapair/Datapair';

storiesOf('Datapair', module)
  .add('with props', () => (
    <Datapair label="Key" value="stuff" />
  ))
  .add('with HTML value', () => (
    <Datapair label="Label"><h1>Custom markup</h1></Datapair>
  ))
