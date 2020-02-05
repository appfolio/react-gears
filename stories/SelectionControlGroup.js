import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { SelectionControlGroup } from '../src';

const options = [
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Apple', value: 'apple' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
];

storiesOf('SelectionControlGroup', module)
  .add('Checkboxes', () => {
    const [selected, setSelected] = useState(new Set());

    const onChange = (values) => { setSelected(values); };

    return (
      <SelectionControlGroup options={options} onChange={onChange} selected={selected} />
    );
  })
  .add('Radio buttons', () => {
    const [selected, setSelected] = useState();

    const onChange = (v) => { setSelected(v); };

    return (
      <SelectionControlGroup radio options={options} onChange={onChange} selected={selected} />
    );
  });
