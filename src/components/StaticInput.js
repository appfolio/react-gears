import React from 'react';

import Input from './Input';

const StaticInput = props => (
  <Input
    {...props}
    plaintext
  />
);

StaticInput.propTypes = {
  ...Input.propTypes
};

StaticInput.defaultProps = {
  ...Input.defaultProps
};

export default StaticInput;
