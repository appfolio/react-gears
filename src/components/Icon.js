import React from 'react';
import FontAwesome from 'react-fontawesome';
import FontAwesome3 from './FontAwesome3.js';

const Icon = props => {
  const { v, ...newProps } = props;
  return v === 3 ? <FontAwesome3 {...newProps} /> : <FontAwesome {...newProps} />;
};

Icon.displayName = 'Icon';

Icon.propTypes = {
  v: React.PropTypes.oneOf([3, 4])
};

Icon.defaultProps = {
  v: 3
};

export default Icon;
