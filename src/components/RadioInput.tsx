import React, { FunctionComponent } from 'react';

type RadioInputProps = {
  type?: any,
  children: any,
  value?: any,
  onChange?: (event: any) => void,
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

RadioInput.displayName = 'RadioInput';

export default RadioInput;
