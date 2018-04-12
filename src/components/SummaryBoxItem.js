import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Card from './Card';
import CardBody from './CardBody';

const SummaryBoxItem = ({ className, label, value, ...props }) => (
  <Card
    color="secondary"
    outline
    className={classnames('rounded-0 shadow-0 bg-white border-secondary', className)}
    {...props}
  >
    <CardBlock className="text-center d-flex flex-column-reverse justify-content-end">
      <small className="text-muted text-uppercase">{label}</small>
      <div className="h3 mb-0 mt-1">{value}</div>
    </CardBlock>
  </Card>
);

SummaryBoxItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  value: PropTypes.node
};

SummaryBoxItem.defaultProps = {
  label: '--',
  value: '--'
};

export default SummaryBoxItem;
