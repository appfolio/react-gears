import { CardProps } from 'reactstrap/lib/Card';
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import Card from './Card';
import CardBody from './CardBody';

interface SummaryBoxItemProps extends Omit<CardProps, 'color' | 'outline' | 'className'> {
  className?: string,
  label?: string,
  value?: React.ReactNode,
  reverse?: boolean
}

const defaultProps = {
  label: '--',
  reverse: true,
  value: '--'
};

const SummaryBoxItem: FunctionComponent<SummaryBoxItemProps> = ({
  className,
  label = defaultProps.label,
  reverse = defaultProps.reverse,
  value = defaultProps.value,
  ...props
}) => {
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
      outline
      className={classnames('rounded-0 shadow-none', className)}
      {...props}
    >
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
