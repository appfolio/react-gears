import React, { useState } from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { PatternInput } from '../src';

const defaultPattern = '^\\d{0,3}(\\.\\d{0,2})?$';

export default {
  title: 'PatternInput',
  component: PatternInput,
};

export const LiveExample = () => {
  const [value, setValue] = useState('');
  const pattern = text('pattern', defaultPattern);
  return (
    <PatternInput
      pattern={new RegExp(pattern)}
      restrictInput={boolean('restrictInput', true)}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
