import React from 'react';
import { Card, CardBlock } from '../';

const SummaryBoxItem = (props) => (
  <Card>
    <CardBlock className="text-center">
      <h3 className="mb-0 mt-1">{props.value}</h3>
      <small className="text-muted text-uppercase">{props.label}</small>
    </CardBlock>
  </Card>
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
