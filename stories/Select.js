import React from 'react';
import { Select } from '../src';
import { storiesOf } from '@kadira/storybook';

import COUNTRIES from '../src/components/address/Countries.js';

storiesOf('Select', module)
  .addWithInfo('with props', () => (
    <Select
      className="w-100"
      options={COUNTRIES}
    />
  ));
