import Omit from '../util/omit';

// When we update to v5 of reactstrap, we can inherit from ListGroupItemProps from @types/reactstrap
interface ListGroupItemProps {
  tag?: React.ReactType;
  active?: boolean;
  disabled?: boolean;
  color?: string;
  action?: boolean;
  className?: string;
  cssModule?: {
    [className: string]: string;
  }
  href?: string;

  onClick?: React.MouseEventHandler<any>;
}


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
