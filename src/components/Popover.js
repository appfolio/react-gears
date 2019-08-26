import PropTypes from 'prop-types';
import Popover from 'reactstrap/lib/Popover';

Popover.propTypes = {
  ...Popover.propTypes,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']) // Overrides reactstrap's unsupported options.
};

Popover.defaultProps = {
  ...Popover.defaultProps,
  fade: false,
  // This is a workaround for the reactstrap Tooltip memory leak issue.
  // https://github.com/reactstrap/reactstrap/issues/1482
  flip: false,
};

export default Popover;
