import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CheckboxGroup } from '../src';

const options = [
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Apple', value: 'apple' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
];

storiesOf('CheckboxGroup', module)
  .add('Live example', () => {
    const selected = ['watermelon', 'lemon'];

    return (
      <CheckboxGroup options={options} onChange={action('onChange')} selected={selected} />
    );
  });
