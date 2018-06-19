import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Card from './Card';
import CardBlock from './CardBlock';

const SummaryBoxItem = ({ className, label, value, ...props }) => (
  <Card
    color="secondary"
    outline
    className={classnames('rounded-0 shadow-0 bg-white border-secondary', className)}
    {...props}
  >
    <CardBlock className="text-center">
      <h3 className="mb-0 mt-1">{value}</h3>
      <small className="text-muted text-uppercase">{label}</small>
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
