import UncontrolledTooltip from 'reactstrap/lib/UncontrolledTooltip';

UncontrolledTooltip.defaultProps = {
  ...UncontrolledTooltip.defaultProps,
  // This is a workaround for the reactstrap Tooltip memory leak issue.
  // https://github.com/reactstrap/reactstrap/issues/1482
  flip: false,
};

export default UncontrolledTooltip;
