import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import CheckboxGroup from './CheckboxGroup';

const options = [
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Apple', value: 'apple' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
];

const optionsSomeDisabled = [
  { label: 'Lemon', value: 'lemon', disabled: true },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape', disabled: true },
];

export default {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    sourceLink: 'Checkbox/CheckboxGroup.tsx',
  },
};

export const LiveExample = () => {
  const [selected, setSelected] = useState([]);

  const handleChange = (values) => {
    setSelected(values);
    action('onChange')(values);
  };

  return <CheckboxGroup options={options} onChange={handleChange} selected={selected} />;
};

export const SomeDisabled = () => {
  const [selected, setSelected] = useState([]);

  const handleChange = (values) => {
    setSelected(values);
    action('onChange')(values);
  };

  return (
    <CheckboxGroup options={optionsSomeDisabled} onChange={handleChange} selected={selected} />
  );
};
