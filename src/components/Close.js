import PropTypes from 'prop-types';
import React from 'react';

const Close = ({ className, ...props }) => (
  <button type="button" className={`close ${className}`} aria-label="Close" {...props}>
    <span aria-hidden="true">&times;</span>
  </button>
);

Close.propTypes = {
  className: PropTypes.string
};

Close.defaultProps = {
  className: ''
};

export default Close;
