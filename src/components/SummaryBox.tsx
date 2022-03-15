import type { FunctionComponent, ReactNode } from 'react';
import React from 'react';
import type { CardGroupProps } from 'reactstrap';
import CardGroup from './CardGroup';
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

const SummaryBox: FunctionComponent<SummaryBoxProps> = ({
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
