import { action } from '@storybook/addon-actions';
import React from 'react';
import COUNTRIES from '../Address/util/Countries';
import Select from './Select';

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const groups = [
  {
    label: 'Black',
    value: 'black',
  },
  {
    label: 'Primary Colors',
    options: [
      {
        label: 'Yellow',
        value: 'yellow',
      },
      {
        label: 'Red',
        value: 'red',
      },
      {
        label: 'Blue',
        value: 'blue',
      },
    ],
  },
  {
    label: 'Secondary Colors',
    options: [
      {
        label: 'Orange',
        value: 'orange',
      },
      {
        label: 'Purple',
        options: [
          {
            label: 'Light Purple',
            value: 'light_purple',
          },
          {
            label: 'Medium Purple',
            value: 'medium_purple',
          },
          {
            label: 'Dark Purple',
            value: 'dark_purple',
          },
        ],
      },
      {
        label: 'Green',
        value: 'green',
      },
    ],
  },
  {
    label: 'White',
    value: 'white',
  },
];

export default {
  title: 'Select',
  component: Select,
  parameters: {
    sourceLink: 'Select/Select.js',
  },
};

export const WithOptions = (args) => (
  <div>
    <Select className="w-100" options={COUNTRIES} {...args} />
    <p className="pt-5">
      Please see{' '}
      <a
        href="http://github.hubspot.com/react-select-plus/"
        rel="noopener noreferrer"
        target="_blank"
      >
        react-select-plus documentation
      </a>{' '}
      for full usage and options.
    </p>
  </div>
);
WithOptions.args = {
  disabled: false,
  multi: false,
  placeholder: undefined,
  onChange: action('onChange'),
};

export const WithGroups = (args) => (
  <div>
    <Select className="w-100" options={groups} {...args} />
  </div>
);
WithGroups.args = {
  disable: false,
  multi: false,
  placeholder: undefined,
  onChange: action('onChange'),
};

export const WithDefaultValueUncontrolled = () => (
  <Select className="w-100" defaultValue="US" options={COUNTRIES} onChange={action('onChange')} />
);

export const Controlled = (args) => <Select className="w-100" options={COUNTRIES} {...args} />;
Controlled.args = {
  value: 'US',
  onChange: action('onChange'),
};
Controlled.argTypes = {
  value: {
    control: {
      type: 'select',
      options: COUNTRIES.map((c) => c.value),
    },
  },
};

export const Async = () => {
  const getOptions = (input, callback) => {
    setTimeout(() => {
      callback(null, {
        options: [
          { value: 'oogah', label: 'Oogah' },
          { value: 'chaka', label: 'Chaka' },
        ],
        complete: true,
      });
    }, 1); // Tiny timeout for testing
  };

  return <Select className="w-100" loadOptions={getOptions} onChange={action('onChange')} />;
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
        disabled: true,
      },
      { label: 'delta@force.com', value: 'delta@force.com', disabled: true },
      {
        label: 'echo@bunnymen.com',
        value: 'echo@bunnymen.com',
        disabled: true,
      },
      { label: 'foxtrot@dance.com', value: 'foxtrot@dance.com' },
      { label: 'golf@club.com', value: 'golf@club.com' },
    ]}
    isValidNewOption={({ label }) => validateEmail(label)}
    onChange={action('onChange')}
  />
);

export const MultipleAndCreatableOptions = (args) => (
  <Select
    className="w-100"
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
    {...args}
  />
);
MultipleAndCreatableOptions.args = {
  creatable: true,
  onChange: action('onChange'),
};
