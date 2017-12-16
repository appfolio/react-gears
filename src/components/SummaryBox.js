import PropTypes from 'prop-types';
import React from 'react';
import CardGroup from './CardGroup';
import SummaryBoxItem from './SummaryBoxItem';

const SummaryBox = ({ children, items, ...props }) => (
  <CardGroup {...props}>
    {items ?
      items.map((item, i) => <SummaryBoxItem key={item.key || i} value={item.value} label={item.label} />) :
      children}
  </CardGroup>
);

SummaryBox.propTypes = {
  children: PropTypes.node,
  items: PropTypes.array
};

export default SummaryBox;
