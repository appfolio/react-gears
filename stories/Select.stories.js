import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Select } from '../src';

import COUNTRIES from '../src/components/address/Countries';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const groups = [
  {
    label: 'Black',
    value: 'black'
  },
  {
    label: 'Primary Colors',
    options: [
      {
        label: 'Yellow',
        value: 'yellow'
      },
      {
        label: 'Red',
        value: 'red'
      },
      {
        label: 'Blue',
        value: 'blue'
      }
    ]
  },
  {
    label: 'Secondary Colors',
    options: [
      {
        label: 'Orange',
        value: 'orange'
      },
      {
        label: 'Purple',
        options: [
          {
            label: 'Light Purple',
            value: 'light_purple'
          },
          {
            label: 'Medium Purple',
            value: 'medium_purple'
          },
          {
            label: 'Dark Purple',
            value: 'dark_purple'
          }
        ]
      },
      {
        label: 'Green',
        value: 'green'
      }
    ]
  },
  {
    label: 'White',
    value: 'white'
  }
];

export default {
  title: 'Select',
  component: Select,
};

export const WithOptions = () => (
  <div>
    <Select
      className="w-100"
      disabled={boolean('disabled', false)}
      multi={boolean('multi', false)}
      options={COUNTRIES}
      placeholder={text('placeholder')}
      onChange={action('onChange')}
    />
    <p className="pt-5">
      Please see <a href="http://github.hubspot.com/react-select-plus/" rel="noopener noreferrer" target="_blank">react-select-plus documentation</a> for full usage and options.
    </p>
  </div>
);

export const WithGroups = () => (
  <div>
    <Select
      className="w-100"
      disabled={boolean('disabled', false)}
      multi={boolean('multi', false)}
      options={groups}
      placeholder={text('placeholder')}
      onChange={action('onChange')}
    />
  </div>
);

export const WithDefaultValueUncontrolled = () => (
  <Select
    className="w-100"
    defaultValue="US"
    options={COUNTRIES}
    onChange={action('onChange')}
  />
);

export const Controlled = () => (
  <Select
    className="w-100"
    value={select(
      'value',
      COUNTRIES.map(c => c.value),
      'US'
    )}
    options={COUNTRIES}
    onChange={action('onChange')}
  />
);

export const Async = () => {
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

  return (
    <Select
      className="w-100"
      loadOptions={getOptions}
      onChange={action('onChange')}
    />
  );
};

export const DisabledOptions = () => (
  <Select
    className="w-100"
    options={[
      { label: 'alpha@team.com', value: 'alpha@team.com' },
      { label: 'bravo@tv.com', value: 'bravo@tv.com' },
      {
        label: 'charlie@brown.com',
        value: 'charlie@brown.com',
        disabled: true
      },
      { label: 'delta@force.com', value: 'delta@force.com', disabled: true },
      {
        label: 'echo@bunnymen.com',
        value: 'echo@bunnymen.com',
        disabled: true
      },
      { label: 'foxtrot@dance.com', value: 'foxtrot@dance.com' },
      { label: 'golf@club.com', value: 'golf@club.com' }
    ]}
    isValidNewOption={({ label }) => validateEmail(label)}
    onChange={action('onChange')}
  />
);

export const MultipleAndCreatableOptions = () => (
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
      { label: 'golf@club.com', value: 'golf@club.com' }
    ]}
    isValidNewOption={({ label }) => validateEmail(label)}
    onChange={action('onChange')}
  />
);
