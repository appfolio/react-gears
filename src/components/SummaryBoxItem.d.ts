import CardProps from './props/Card';
import Omit from '../util/Omit';

interface SummaryBoxItemPropTypes extends Omit<CardProps, 'color' | 'outline' | 'className'> {
  className?: string;
  label?: string;
  value?: string;
}
declare const SummaryBoxItem: React.StatelessComponent<SummaryBoxItemPropTypes>;
export default SummaryBoxItem;
