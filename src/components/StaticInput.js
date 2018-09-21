import React from 'react';
import Input from './Input';

const StaticInput = ({ type, value, defaultValue, children, color, state, ...props }) => (
  <Input
    plaintext
    state={color || state}
    {...props}
  >
    {value || defaultValue}
  </Input>
);

export default StaticInput;
