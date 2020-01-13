import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Select } from '../src';

import COUNTRIES from '../src/components/address/Countries.js';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

storiesOf('Select', module)
  .add('with options', () => (
    <div>
      <Select
        className="w-100"
        isDisabled={boolean('isDisabled', false)}
        isMulti={boolean('isMulti', false)}
        options={COUNTRIES}
        placeholder={text('placeholder')}
        onChange={action('onChange')}
      />
      <p className="pt-5">
        Please see <a href="https://react-select.com/home" rel="noopener noreferrer" target="_blank">react-select documentation</a> for full usage and options.
      </p>
    </div>
  ))
  .add('with initial selection (uncontrolled)', () => (
    <Select
      className="w-100"
      defaultValue="US"
      options={COUNTRIES}
      onChange={action('onChange')}
    />
  ))
  .add('as a controlled input', () => (
    <Select
      className="w-100"
      value={select('value', COUNTRIES.map(c => c.value), 'US')}
      options={COUNTRIES}
      onChange={action('onChange')}
    />
  ))
  .add('with async options', () => {
    const getOptions = inputValue => {
      const filteredOptions =
       COUNTRIES.filter(country => country.label.toLowerCase().includes(inputValue.toLowerCase()));
      return filteredOptions;
    }

    const promiseOptions = inputValue =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(getOptions(inputValue))
        }, 1); // Tiny timeout for testing
      });

    return (<Select
      className="w-100"
      loadOptions={promiseOptions}
      onChange={action('onChange')}
    />);
  })
  .add('with multiple and creatable options', () => (
    <Select
      className="w-100"
      creatable={boolean('creatable', true)}
      isMulti
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
