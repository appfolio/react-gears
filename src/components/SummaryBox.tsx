import { CardGroupProps } from 'reactstrap';
import React, { FunctionComponent, ReactNode } from 'react';
import CardGroup from './CardGroup';
import SummaryBoxItem from './SummaryBoxItem';

interface SummaryItem {
  key?: string | number,
  value: ReactNode,
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
}: CardGroupProps) => (
  <CardGroup {...props}>
    {items ?
        items.map((item: SummaryItem, i: number) => <SummaryBoxItem key={item.key || i} value={item.value} label={item.label} reverse={reverse} />) :
        children}
  </CardGroup>
);

SummaryBox.displayName = 'SummaryBox';
SummaryBox.defaultProps = defaultProps;

export default SummaryBox;
