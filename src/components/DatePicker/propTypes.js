import { PropTypes } from 'react';

const SharedPropTypes = {
  calendarDateFormat: PropTypes.string,
  className: PropTypes.string,
  close: PropTypes.func,
  date: PropTypes.instanceOf(Date),
  dateFormat: PropTypes.string,
  dateVisible: PropTypes.func,
  disabled: PropTypes.bool,
  footer: PropTypes.node,
  header: PropTypes.node,
  isOpen: PropTypes.bool,
  keyboard: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSelect: PropTypes.func,
  open: PropTypes.func,
  showOnFocus: PropTypes.bool,
  toggle: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
};

export const PresenterPropTypes = {
  ...SharedPropTypes
};

export default {
  ...SharedPropTypes
};
