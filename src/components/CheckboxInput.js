import React from 'react';

import CheckboxBooleanInput from './CheckboxBooleanInput';
import CheckboxListInput from './CheckboxListInput';

const CheckboxInput = props =>
  props.children ?
    <CheckboxListInput {...props} /> :
    <CheckboxBooleanInput {...props} />;

export default CheckboxInput;
