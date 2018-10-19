import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({ type, children, value, ...props }) => (
  <div>
    {React.Children.map(children, choice => React.cloneElement(choice, {
      type: 'radio',
      selected: value,
      ...props
    }))}
  </div>
);

RadioInput.propTypes = {
  type: PropTypes.any,
  children: PropTypes.node,
  value: PropTypes.any
};

export default RadioInput;
