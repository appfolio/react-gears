import React, { PropTypes } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { InputGroup, InputGroupAddon } from 'reactstrap';

const CurrencyInput = ({ size, ...props }) => (
  <InputGroup size={size} className={props.className}>
    <InputGroupAddon>$</InputGroupAddon>
    <MaskedInput
      {...props}
      className="form-control"
      mask={createNumberMask({ allowDecimal: true, prefix: '' })}
    />
  </InputGroup>
);

CurrencyInput.propTypes = {
  className: PropTypes.number,
  size: PropTypes.string
};


export default CurrencyInput;
