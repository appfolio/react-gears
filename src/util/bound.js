import PropTypes from 'prop-types';
import React from 'react';

const noop = () => {};

export default (Component) => {
  const BoundWrapper = (props, { value = {}, errors = {}, onChange }) => {
    const { onChange: onChangeProp, ...rowProps } = props;

    return (
      <Component
        value={typeof value[props.name] === 'undefined' ? '' : value[props.name]}
        feedback={errors[props.name] || ''}
        onChange={(e) => {
          onChangeProp(e);
          onChange(props.name)(e);
        }}
        {...rowProps}
      />
    );
  };

  BoundWrapper.contextTypes = {
    value: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
  };

  BoundWrapper.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };

  BoundWrapper.defaultProps = {
    onChange: noop,
  };

  return BoundWrapper;
};
