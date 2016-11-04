import CSSModules from 'react-css-modules';
import React from 'react';
import SummaryBoxItem from './SummaryBoxItem.js';
import styles from './SummaryBox.scss';

const SummaryBox = (props) => (
  <div styleName="summaryBox">
    {props.items ?
      props.items.map(item => <SummaryBoxItem value={item.value} label={item.label} />) :
      props.children}
  </div>
);

SummaryBox.propTypes = {
  items: React.PropTypes.array
};

export default CSSModules(SummaryBox, styles);
