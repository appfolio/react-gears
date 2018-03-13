import React from 'react';
import { Badge, Icon, Select } from '../src';
import { action, storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import COUNTRIES from '../src/components/address/Countries.js';

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

storiesOf('Select', module)
  .addWithInfo('with options', () => (
    <div>
      <Select
        className="w-100"
        disabled={boolean('disabled', false)}
        multi={boolean('multi', false)}
        options={COUNTRIES}
        onChange={action('onChange')}
      />
      <p className="pt-5">
        Please see <a href="http://github.hubspot.com/react-select-plus/" target="_blank">react-select-plus documentation</a> for full usage and options.
      </p>
    </div>
  ))
  .addWithInfo('with initial selection (uncontrolled)', () => (
    <Select
      className="w-100"
      defaultValue="US"
      options={COUNTRIES}
      onChange={action('onChange')}
    />
  ))
  .addWithInfo('as a controlled input', () => (
    <Select
      className="w-100"
      value={select('value', COUNTRIES.map(c => c.value), 'US')}
      options={COUNTRIES}
      onChange={action('onChange')}
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
      onChange={action('onChange')}
    />);
  })
  .addWithInfo('with multiple and creatable options', () => (
    <Select
      className="w-100"
      creatable={boolean('creatable', true)}
      multi
      options={[
        { label: 'alpha@team.com', value: 'alpha@team.com' },
        { label: 'bravo@tv.com', value: 'bravo@tv.com' },
        { label: 'charlie@brown.com', value: 'charlie@brown.com' },
        { label: 'delta@force.com', value: 'delta@force.com' },
        { label: 'echo@bunnymen.com', value: 'echo@bunnymen.com' },
        { label: 'foxtrot@dance.com', value: 'foxtrot@dance.com' },
        { label: 'golf@club.com', value: 'golf@club.com' },
      ]}
      isValidNewOption={({ label }) => validateEmail(label)}
      onChange={action('onChange')}
    />));
