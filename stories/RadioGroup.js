import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
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
    const [selected, setSelected] = useState();

    const onChange = (v) => { setSelected(v); };

    return (
      <RadioGroup radio options={options} onChange={onChange} selected={selected} />
    );
  });
