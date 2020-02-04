import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { CheckGroup } from '../src';

storiesOf('CheckGroup', module)
  .add('Live example', () => {
    const options = [
      { label: 'Watermelon', value: 'watermelon' },
      { label: 'Apple', value: 'apple' },
      { label: 'Lemon', value: 'lemon' },
      { label: 'Orange', value: 'orange' },
      { label: 'Grape', value: 'grape' },
    ];

    const [selected, setSelected] = useState(new Set());

    const onChange = (values) => {
      console.log(values);
      setSelected(values);
    };

    return (
      <CheckGroup options={options} onChange={onChange} selected={selected} />
    );
  });
