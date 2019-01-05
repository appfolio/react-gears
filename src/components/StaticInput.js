import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

const StaticInput = ({ type, children, color, state, ...props }) => (
  <Input
    plaintext
    {...props}
  />
);

StaticInput.propTypes = {
  type: PropTypes.any,
  children: PropTypes.any,
  color: PropTypes.string,
  state: PropTypes.string
};

export default StaticInput;
