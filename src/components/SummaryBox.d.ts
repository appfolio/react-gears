import CardGroupProps from './TypeHelpers/props/CardGroup';

interface SummaryItem {
  key?: string | number;
  value: string;
  label: string;
}

interface SummaryBoxPropTypes extends CardGroupProps {
  children?: (JSX.Element | string) | (JSX.Element | string)[]; 
  items?: SummaryItem[];
}
declare const SummaryBox: React.StatelessComponent<SummaryBoxPropTypes>;
export default SummaryBox;
