import React, { FC } from 'react';
import { InputProps } from 'reactstrap';
import Input from './Input';

export interface StaticInputProps extends InputProps {
  children?: React.ReactNode;
}

/* eslint-disable-next-line @typescript-eslint/no-unused-vars -- Figure out a better way to omit children (will need a reusable solution) */
const StaticInput: FC<StaticInputProps> = ({ children, ...props }) => (
  <Input {...props} type="text" plaintext />
);

StaticInput.displayName = 'StaticInput';

StaticInput.defaultProps = {
  ...Input.defaultProps,
};

export default StaticInput;
