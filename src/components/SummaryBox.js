import PropTypes from 'prop-types';
import React from 'react';
import CardGroup from './CardGroup';
import SummaryBoxItem from './SummaryBoxItem';

const SummaryBox = ({ children, className, items }) => (
  <CardGroup className={className}>
    {items ?
      items.map((item, i) => <SummaryBoxItem key={i} value={item.value} label={item.label} />) :
      children}
  </CardGroup>
);

SummaryBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.array
};

export default SummaryBox;
