import PropTypes from 'prop-types';
import React from 'react';
import { Popover } from 'reactstrap';

Popover.propTypes = {
  ...Popover.propTypes,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']) // Overrides reactstrap's unsupported options.
};

export default Popover;
