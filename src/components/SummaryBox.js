import React from 'react';
import { CardGroup } from '../';
import SummaryBoxItem from './SummaryBoxItem.js';

const SummaryBox = (props) => (
  <CardGroup>
    {props.items ?
      props.items.map((item, i) => <SummaryBoxItem key={i} value={item.value} label={item.label} />) :
      props.children}
  </CardGroup>
);

SummaryBox.propTypes = {
  items: React.PropTypes.array
};

export default SummaryBox;
