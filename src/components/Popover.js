import PropTypes from 'prop-types';
import Popover from 'reactstrap/lib/Popover';

Popover.propTypes = {
  ...Popover.propTypes,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']) // Overrides reactstrap's unsupported options.
};

export default Popover;
