import React from 'react';

import styles from './SummaryBoxItem.scss';

const SummaryBoxItem = (props) => (
  <div className={styles.summaryBoxItem}>
    <span className={styles.summaryBoxItemValue}>{props.value}</span>
    <label className={styles.summaryBoxItemLabel}>{props.label}</label>
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

export default SummaryBoxItem;
