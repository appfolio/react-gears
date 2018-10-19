import PropTypes from 'prop-types';
import React from 'react';
import MaskedInput from 'react-text-mask';

//
// TODO there is currently a bug in MaskedInput that prevents users from entering decimal only currency values.
// As of 06/05/2017 the issue has been fixed and has an open PR to react-text mask at
// https://github.com/text-mask/text-mask/pull/542
// The monkey patch imported below can be removed when the PR is merged and a new version of react-text-mask is
// released.
//
//import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import createNumberMask from './CurrencyInput/createNumberMaskMonkeyPatch';

import InputGroup from './InputGroup';
import InputGroupAddon from './InputGroupAddon';

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
      <InputGroupAddon addonType="prepend">$</InputGroupAddon>
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
  allowDecimal: PropTypes.bool,
  allowNegative: PropTypes.bool,
  className: PropTypes.string,
  includeThousandsSeparator: PropTypes.bool,
  size: PropTypes.string,
  state: PropTypes.any,
  type: PropTypes.any
};


export default CurrencyInput;
