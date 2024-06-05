import React, { useState } from 'react';
import PatternInput from './PatternInput';

export default {
  title: 'PatternInput',
  component: PatternInput,
  parameters: {
    sourceLink: 'Input/PatternInput.js',
  },
};

export const LiveExample = ({ pattern, restrictInput }) => {
  const [value, setValue] = useState('');
  return (
    <PatternInput
      pattern={new RegExp(pattern)}
      restrictInput={restrictInput}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
LiveExample.args = {
  pattern: '^\\d{0,3}(\\.\\d{0,2})?$',
  restrictInput: true,
};
