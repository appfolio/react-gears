import PropTypes from 'prop-types';
import React from 'react';
import CardGroup from './CardGroup';
import SummaryBoxItem from './SummaryBoxItem';

const SummaryBox = (props) => (
  <CardGroup>
    {props.items ?
      props.items.map((item, i) => <SummaryBoxItem key={i} value={item.value} label={item.label} />) :
      props.children}
  </CardGroup>
);

SummaryBox.propTypes = {
  items: PropTypes.array
};

export default SummaryBox;
