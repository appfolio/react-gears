import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './SummaryBoxItem.scss';

const SummaryBoxItem = (props) => (
  <div styleName="summaryBoxItem">
    <span styleName="summaryBoxItemValue">{props.value}</span>
    <label styleName="summaryBoxItemLabel">{props.label}</label>
  </div>
);

SummaryBoxItem.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.string // TODO support links
};

SummaryBoxItem.defaultProps = {
  label: '--',
  value: '--'
};

export default CSSModules(SummaryBoxItem, styles);

