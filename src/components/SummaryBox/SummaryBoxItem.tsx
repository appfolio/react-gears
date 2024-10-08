import classnames from 'classnames';
import React, { FC } from 'react';
import { CardProps } from 'reactstrap';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';

interface SummaryBoxItemProps extends Omit<CardProps, 'color' | 'outline' | 'className'> {
  className?: string;
  label?: React.ReactNode;
  value?: React.ReactNode;
  reverse?: boolean;
}

const defaultProps = {
  label: '--',
  reverse: true,
  value: '--',
};

const SummaryBoxItem: FC<SummaryBoxItemProps> = ({
  className,
  label = defaultProps.label,
  reverse = defaultProps.reverse,
  value = defaultProps.value,
  ...props
}) => {
  const bodyClassNames = classnames('text-center d-flex justify-content-end', {
    'flex-column-reverse': reverse,
    'flex-column': !reverse,
  });
  const valueClassNames = classnames('display-4', {
    'mb-1 mt-0': reverse,
    'mb-0 mt-1': !reverse,
  });

  return (
    <Card outline className={classnames('rounded-0 shadow-none', className)} {...props}>
      <CardBody className={bodyClassNames}>
        <span className="text-muted">{label}</span>
        <div className={valueClassNames}>{value}</div>
      </CardBody>
    </Card>
  );
};

SummaryBoxItem.displayName = 'SummaryBoxItem';
SummaryBoxItem.defaultProps = defaultProps;

export default SummaryBoxItem;
