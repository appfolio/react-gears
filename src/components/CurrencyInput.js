import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const CurrencyInput = ({ type, size, ...props }) => (
  <InputGroup size={size}>
    <InputGroupAddon>$</InputGroupAddon>
    <Input {...props} />
  </InputGroup>
);

export default CurrencyInput;
