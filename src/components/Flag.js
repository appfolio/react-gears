import React, { PropTypes } from 'react';

// TODO can remove this component once reactstrap moves Tag to Badge component.
const Flag = (props) => {
  const {
    className,
    color,
    pill,
    tag: Component,
    ...attributes
  } = props;

  const classes = `${className} badge badge-${color} ${pill ? 'badge-pill' : false}`;

  return (
    <Component {...attributes} className={classes} />
  );
};

Flag.propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

Flag.defaultProps = {
  color: 'default',
  pill: false,
  tag: 'span'
};

export default Flag;
