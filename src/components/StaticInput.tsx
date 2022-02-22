import React, { FunctionComponent } from 'react';
import { InputProps } from 'reactstrap/lib/Input';

import Input from './Input';

export interface StaticInputProps extends InputProps {
  children?: React.ReactNode;
}

const StaticInput: FunctionComponent<InputProps> = ({ children, ...props }) => (
  <Input {...props} type="text" plaintext />
);

StaticInput.displayName = 'StaticInput';

StaticInput.defaultProps = {
  ...Input.defaultProps,
};

export default StaticInput;
