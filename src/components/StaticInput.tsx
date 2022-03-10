import React, { FunctionComponent } from 'react';
import { InputProps } from 'reactstrap';

import Input from './Input';

export interface StaticInputProps extends InputProps {
  children?: React.ReactNode;
}

const StaticInput: FunctionComponent<StaticInputProps> = ({
  children,
  ...props
}) => (
  <Input
    {...props}
    type="text"
    plaintext
  />
);

StaticInput.displayName = 'StaticInput';

StaticInput.defaultProps = {
  ...Input.defaultProps
};

export default StaticInput;
