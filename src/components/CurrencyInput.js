import React, { PropTypes } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { InputGroup, InputGroupAddon } from 'reactstrap';

/**
 * In the case where the user enters an extra "." at the end of the input the default behavior will
 * be to remove the original decimal point and keep the new one, resulting in the value being
 * multiplied by 100.  If we detect an additional decimal point we can ignore the extra character.
 */
function preventMultipleDecimalPoint(conformedValue, config) {
  let result = conformedValue;
  if (config.rawValue.match(/\..*\./)) {
    result = config.previousConformedValue;
  }
  return result;
}

// TODO support I18n
const CurrencyInput = ({ size, ...props }) => {
  /* eslint-disable  no-unused-vars */
  const {
    state,
    type,
    allowDecimal,
    allowNegative,
    includeThousandsSeparator,
    ...inputProps
  } = props;
  /* eslint-enable  no-unused-vars */

  const maskedProps = {
    ...inputProps,
    className: 'form-control',
    // There is a weird bug in the MaskedInput where if the "value" prop gets set to null the
    // input value gets set to "_".  Setting guide to false instead of undefined solves the
    // problem.
    guide: false,
    mask: createNumberMask({
      allowDecimal: props.allowDecimal,
      allowNegative: props.allowNegative,
      includeThousandsSeparator: props.includeThousandsSeparator,
      prefix: ''
    }),
    pipe: preventMultipleDecimalPoint,
  };

  return (
    <InputGroup size={size} className={props.className}>
      <InputGroupAddon>$</InputGroupAddon>
      <MaskedInput {...maskedProps} />
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
