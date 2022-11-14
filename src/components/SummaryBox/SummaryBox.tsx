import React, { FC, ReactNode } from 'react';
import { CardGroupProps } from 'reactstrap';
import CardGroup from '../Card/CardGroup';
import SummaryBoxItem from './SummaryBoxItem';

interface SummaryItem {
  key?: string | number;
  value: ReactNode;
  label: string;
}

interface SummaryBoxProps extends CardGroupProps {
  children?: ReactNode;
  items?: SummaryItem[];
  reverse?: boolean;
}

const defaultProps = {
  reverse: true,
};

// ref
const SummaryBox: FC<SummaryBoxProps> = ({
  children,
  items,
  reverse = defaultProps.reverse,
  ...props
}) => (
  <CardGroup {...props}>
    {items
      ? items.map((item, i) => (
          <SummaryBoxItem
            key={item.key || i}
            value={item.value}
            label={item.label}
            reverse={reverse}
          />
        ))
      : children}
  </CardGroup>
);

SummaryBox.displayName = 'SummaryBox';
SummaryBox.defaultProps = defaultProps;

export default SummaryBox;
