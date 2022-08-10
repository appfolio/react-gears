import React, { FC } from 'react';

type RadioInputProps = {
  type?: any;
  children: any;
  value?: any;
  onChange?: (event: any) => void;
};

/* eslint-disable-next-line  @typescript-eslint/no-unused-vars -- Let's figure out a better way to omit props for this scenario */
const RadioInput: FC<RadioInputProps> = ({ type, children, value, ...props }) => (
  <div>
    {React.Children.map(
      children,
      (choice) =>
        React.isValidElement(choice) &&
        React.cloneElement(choice as any, {
          type: 'radio',
          selected: value,
          ...props,
        })
    )}
  </div>
);

RadioInput.displayName = 'RadioInput';

export default RadioInput;
