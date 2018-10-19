import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

const StaticInput = ({ type, value, defaultValue, children, color, state, ...props }) => (
  <Input
    plaintext
    state={color || state}
    {...props}
  >
    {value || defaultValue}
  </Input>
);

StaticInput.propTypes = {
  type: PropTypes.any,
  value: PropTypes.node,
  defaultValue: PropTypes.node,
  children: PropTypes.any,
  color: PropTypes.string,
  state: PropTypes.string
};

export default StaticInput;
