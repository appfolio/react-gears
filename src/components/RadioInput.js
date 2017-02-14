import React from 'react';

const RadioInput = ({ type, children, value, ...props }) => (
  <div>
    {React.Children.map(children, choice => React.cloneElement(choice, {
      type: 'radio',
      selected: value,
      ...props
    }))}
  </div>
);

export default RadioInput;
