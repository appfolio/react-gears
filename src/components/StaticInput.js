import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

const StaticInput = ({ type, children, ...props }) => (
  <Input
    plaintext
    {...props}
  />
);

StaticInput.propTypes = {
  type: PropTypes.any,
  children: PropTypes.any
};

export default StaticInput;
