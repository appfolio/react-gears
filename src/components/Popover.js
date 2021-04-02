import { Popover } from 'reactstrap';

Popover.defaultProps = {
  ...Popover.defaultProps,
  fade: false,
  trigger: 'legacy'
};

export default Popover;
