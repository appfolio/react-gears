import CardProps from './TypeHelpers/props/Card';
import Omit from './TypeHelpers/Omit';
import * as React from 'react';

interface SummaryBoxItemProps extends Omit<CardProps, 'color' | 'outline' | 'className'> {
  className?: string;
  label?: string;
  value?: string;
}
declare class SummaryBoxItem extends React.Component<SummaryBoxItemProps, {}> { }
export default SummaryBoxItem;

