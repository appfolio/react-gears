import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RadioGroup } from '../src';

const options = [
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Apple', value: 'apple' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
];

storiesOf('RadioGroup', module)
  .add('Live Example', () => {
    const selected = 'lemon';

    return (
      <RadioGroup radio options={options} onChange={action('onChange')} selected={selected} />
    );
  });
