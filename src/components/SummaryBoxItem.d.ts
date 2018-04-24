import CardProps from './TypeHelpers/props/Card';
import Omit from './TypeHelpers/Omit';

interface SummaryBoxItemPropTypes extends Omit<CardProps, 'color' | 'outline' | 'className'> {
  className?: string;
  label?: string;
  value?: string;
}
declare const SummaryBoxItem: React.StatelessComponent<SummaryBoxItemPropTypes>;
export default SummaryBoxItem;
