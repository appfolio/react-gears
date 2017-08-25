import { PropTypes } from 'react';

const SharedPropTypes = {
  date: PropTypes.instanceOf(Date),
  dateFormat: PropTypes.string,
  dateVisible: PropTypes.func,
  footer: PropTypes.node,
  header: PropTypes.node,
  onSelect: PropTypes.func
};

export const PresenterPropTypes = {
  ...SharedPropTypes,
  onKeyDown: PropTypes.func,
  onNextMonth: PropTypes.func,
  onNextYear: PropTypes.func,
  onPrevMonth: PropTypes.func,
  onPrevYear: PropTypes.func,
  onToday: PropTypes.func
};

export default {
  ...SharedPropTypes,
  close: PropTypes.func,
  keyboard: PropTypes.bool,
  onChange: PropTypes.func
};
