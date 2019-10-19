import React from 'react';
import PropTypes from 'prop-types';

import CheckboxBooleanInput from './CheckboxBooleanInput';
import CheckboxListInput from './CheckboxListInput';

const CheckboxInput = props =>
  props.children ?
    <CheckboxListInput {...props} /> :
    <CheckboxBooleanInput {...props} />;

CheckboxInput.propTypes = { children: PropTypes.element };
// TODO should expose both prop types

export default CheckboxInput;
