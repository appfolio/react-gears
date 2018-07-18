import React from 'react';
import Input from './Input';

const StaticInput = ({ type, value, defaultValue, children, color, state, ...props }) => (
  <Input
    plaintext
    children={value || defaultValue}
    state={color || state}
    {...props}
  />
);

export default StaticInput;
