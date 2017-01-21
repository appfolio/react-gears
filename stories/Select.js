import React from 'react';
import { Select } from '../src';
import { storiesOf } from '@kadira/storybook';
import { select } from '@kadira/storybook-addon-knobs';

import COUNTRIES from '../src/components/address/Countries.js';

storiesOf('Select', module)
  .addWithInfo('with options', () => (
    <Select
      className="w-100"
      options={COUNTRIES}
    />
  ))
  .addWithInfo('with initial selection (uncontrolled)', () => (
    <Select
      className="w-100"
      defaultValue="US"
      options={COUNTRIES}
    />
  ))
  .addWithInfo('as a controlled input', () => (
    <Select
      className="w-100"
      value={select('value', COUNTRIES.map(c => c.value), 'US')}
      options={COUNTRIES}
    />
  ))
  .addWithInfo('with async options', () => {
    const getOptions = (input, callback) => {
      setTimeout(() => {
        callback(null, {
          options: [
            { value: 'oogah', label: 'Oogah' },
            { value: 'chaka', label: 'Chaka' }
          ],
          complete: true
        });
      }, 1); // Tiny timeout for testing
    };

    return (<Select
      className="w-100"
      loadOptions={getOptions}
    />);
  });
