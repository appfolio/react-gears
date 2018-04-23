import Omit from '../util/omit';
import ListGroupItemProps from './props/ListGroupItemProps';

export interface ActivityProps extends Omit<ListGroupItemProps, 'action'> {
  action?: JSX.Element | string;
  by?: JSX.Element | string;
  children?: JSX.Element | string;
  date: Date;
  dateFormat?: string;
  isOpen?: boolean;
  toggle?: () => void;
}

declare const Activity: React.StatelessComponent<ActivityProps>;
export default Activity;
