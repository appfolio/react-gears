import Popover from 'reactstrap/lib/Popover';

Popover.defaultProps = {
  ...Popover.defaultProps,
  fade: false,
  // This is a workaround for the reactstrap Tooltip memory leak issue.
  // https://github.com/reactstrap/reactstrap/issues/1482
  flip: false,
};

export default Popover;
