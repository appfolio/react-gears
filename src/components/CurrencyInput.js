import React from 'react';
import { InputGroup, InputGroupAddon } from 'reactstrap';
import Input from './PatternInput';

const CurrencyInput = ({ size, ...props }) => (
  <InputGroup size={size}>
    <InputGroupAddon>$</InputGroupAddon>
    <Input {...props} pattern={/[0-9\.]/} />
  </InputGroup>
);

export default CurrencyInput;
