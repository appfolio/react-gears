import UncontrolledPopover from 'reactstrap/lib/UncontrolledPopover';

UncontrolledPopover.defaultProps = {
  ...UncontrolledPopover.defaultProps,
  // This is a workaround for the reactstrap Tooltip memory leak issue.
  // https://github.com/reactstrap/reactstrap/issues/1482
  flip: false,
};

export default UncontrolledPopover;
