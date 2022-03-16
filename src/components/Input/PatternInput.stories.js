import { text, boolean } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import PatternInput from './PatternInput';

export default {
  title: 'PatternInput',
  component: PatternInput,
};

export const LiveExample = () => {
  const [value, setValue] = useState('');
  const pattern = text('pattern', '^\\d{0,3}(\\.\\d{0,2})?$');
  return (
    <PatternInput
      pattern={new RegExp(pattern)}
      restrictInput={boolean('restrictInput', true)}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
