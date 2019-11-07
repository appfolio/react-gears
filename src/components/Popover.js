import Popover from 'reactstrap/lib/Popover';

Popover.defaultProps = {
  ...Popover.defaultProps,
  fade: false,
  trigger: 'legacy'
};

export default Popover;
