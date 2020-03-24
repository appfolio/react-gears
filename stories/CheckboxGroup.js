import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
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
    const [selected, setSelected] = useState(new Set());

    const onChange = (values) => { setSelected(values); };

    return (
      <CheckboxGroup options={options} onChange={onChange} selected={selected} />
    );
  });
