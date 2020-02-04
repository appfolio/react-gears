import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { CheckGroup } from '../src';

const options = [
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Apple', value: 'apple' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
];

storiesOf('CheckGroup', module)
  .add('Checkboxes', () => {
    const [selected, setSelected] = useState(new Set());

    const onChange = (values) => { setSelected(values); };

    return (
      <CheckGroup options={options} onChange={onChange} selected={selected} />
    );
  })
  .add('Radio buttons', () => {
    const [selected, setSelected] = useState();

    const onChange = (v) => { setSelected(v); };

    return (
      <CheckGroup radio options={options} onChange={onChange} selected={selected} />
    );
  });
