import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { CheckboxGroup } from '../src';

const options = [
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Apple', value: 'apple' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
];

export default {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
};

export const LiveExample = () => {
  const [selected, setSelected] = useState([]);

  const handleChange = (values) => {
    setSelected(values);
    action('onChange')(values);
  };

  return <CheckboxGroup options={options} onChange={handleChange} selected={selected} />;
};
