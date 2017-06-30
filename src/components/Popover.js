import React from 'react';
import { Popover } from 'reactstrap';

Popover.propTypes = {
  ...Popover.propTypes,
  placement: React.PropTypes.oneOf(['top', 'bottom', 'left', 'right']) // Overrides reactstrap's unsupported options.
};

export default Popover;
