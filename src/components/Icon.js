import React from 'react';
import FontAwesome from 'react-fontawesome';

const Icon = (props) => (
  <FontAwesome {...props} />
);

Icon.PropTypes = {
  border: React.PropTypes.bool,
  className: React.PropTypes.string,
  cssModule: React.PropTypes.object,
  fixedWidth: React.PropTypes.bool,
  flip: React.PropTypes.oneOf(['horizontal', 'vertical']),
  inverse: React.PropTypes.bool,
  name: React.PropTypes.string.isRequired,
  pulse: React.PropTypes.bool,
  rotate: React.PropTypes.oneOf([90, 180, 270]),
  size: React.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
  spin: React.PropTypes.bool,
  stack: React.PropTypes.oneOf(['1x', '2x'])
};

export default Icon;
