import CardGroupProps from './TypeHelpers/props/CardGroup';
import * as React from 'react';

interface SummaryItem {
  key?: string | number;
  value: string;
  label: string;
}

interface SummaryBoxProps extends CardGroupProps {
  children?: (JSX.Element | string) | (JSX.Element | string)[]; 
  items?: SummaryItem[];
}
declare class SummaryBox extends React.Component<SummaryBoxProps, {}> { }
export default SummaryBox;
