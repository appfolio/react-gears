import React, { PropTypes } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { InputGroup, InputGroupAddon } from 'reactstrap';

// TODO support I18n
const CurrencyInput = ({ size, ...props }) => {
  const inputProps = Object.assign({}, props, {
    className: 'form-control',
    mask: createNumberMask({
      allowDecimal: props.allowDecimal,
      allowNegative: props.allowNegative,
      includeThousandsSeparator: props.includeThousandsSeparator,
      prefix: ''
    }),
  });
  delete inputProps.allowDecimal;
  delete inputProps.allowNegative;
  delete inputProps.includeThousandsSeparator;

  return (
    <InputGroup size={size} className={props.className}>
      <InputGroupAddon>$</InputGroupAddon>
      <MaskedInput {...inputProps} />
    </InputGroup>
  );
};

CurrencyInput.defaultProps = {
  allowDecimal: true,
  allowNegative: false,
  includeThousandsSeparator: true,
};

CurrencyInput.propTypes = {
  allowDecimal: React.PropTypes.bool,
  allowNegative: React.PropTypes.bool,
  className: PropTypes.number,
  includeThousandsSeparator: React.PropTypes.bool,
  size: PropTypes.string
};


export default CurrencyInput;
