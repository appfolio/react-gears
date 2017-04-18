import React, { PropTypes } from 'react';
import { InputFormGroup } from './FormGroups';
import noop from 'lodash.noop';

function EmailInput(props) {
  return <InputFormGroup {...props} name="emailAddress" />;
}

const fieldTypes = {
  emailAddress: PropTypes.string
};

EmailInput.propTypes = {
  value: PropTypes.shape(fieldTypes),
  defaultValue: PropTypes.shape(fieldTypes),
  error: PropTypes.shape(fieldTypes),
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

EmailInput.defaultProps = {
  value: {},
  defaultValue: {},
  error: {},
  onChange: noop,
  disabled: false
};

export default EmailInput;
