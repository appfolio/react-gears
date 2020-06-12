import React, { FunctionComponent } from 'react';

type RadioInputProps = {
  type: any,
  children: any,
  value: any
}

const RadioInput: FunctionComponent<RadioInputProps> = ({ type, children, value, ...props }) => (
  <div>
    {React.Children.map(children, choice => React.cloneElement(choice, {
      type: 'radio',
      selected: value,
      ...props
    }))}
  </div>
);

export default RadioInput;
