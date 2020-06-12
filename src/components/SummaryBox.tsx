import { CardGroupProps } from 'reactstrap/lib/CardGroup';
import React, { FunctionComponent, ReactNode } from 'react';
import CardGroup from './CardGroup';
import SummaryBoxItem from './SummaryBoxItem';

interface SummaryItem {
  key?: string | number,
  value: string,
  label: string
}

interface SummaryBoxProps extends CardGroupProps {
  children?: ReactNode,
  items?: SummaryItem[],
  reverse?: boolean
}

const defaultProps = {
  reverse: true
};

const SummaryBox: FunctionComponent<SummaryBoxProps> = ({
  children,
  items,
  reverse = defaultProps.reverse,
  ...props
}) => (
  <CardGroup {...props}>
    {items ?
      items.map((item, i) => <SummaryBoxItem key={item.key || i} value={item.value} label={item.label} reverse={reverse} />) :
      children}
  </CardGroup>
);

SummaryBox.defaultProps = defaultProps;

export default SummaryBox;
