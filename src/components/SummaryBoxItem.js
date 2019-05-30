import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Card from './Card';
import CardBody from './CardBody';

const SummaryBoxItem = ({ className, label, reverse, value, ...props }) => {
  const bodyClassNames = classnames('text-center d-flex justify-content-end', {
    'flex-column-reverse': reverse,
    'flex-column': !reverse
  });
  const valueClassNames = classnames('h3', {
    'mb-1 mt-0': reverse,
    'mb-0 mt-1': !reverse
  });

  return (
    <Card
      color="secondary"
      outline
      className={classnames('rounded-0 shadow-none bg-white border-secondary', className)}
      {...props}
    >
      <CardBody className={bodyClassNames}>
        <small className="text-muted text-uppercase">{label}</small>
        <div className={valueClassNames}>{value}</div>
      </CardBody>
    </Card>
  );
};

SummaryBoxItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  reverse: PropTypes.bool,
  value: PropTypes.node
};

SummaryBoxItem.defaultProps = {
  label: '--',
  reverse: true,
  value: '--'
};

export default SummaryBoxItem;
