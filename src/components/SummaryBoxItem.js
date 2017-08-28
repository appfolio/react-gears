import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';
import CardBlock from './CardBlock';

const SummaryBoxItem = (props) => (
  <Card color="secondary" outline className="rounded-0">
    <CardBlock className="text-center">
      <h3 className="mb-0 mt-1">{props.value}</h3>
      <small className="text-muted text-uppercase">{props.label}</small>
    </CardBlock>
  </Card>
);

SummaryBoxItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string // TODO support links
};

SummaryBoxItem.defaultProps = {
  label: '--',
  value: '--'
};

export default SummaryBoxItem;
