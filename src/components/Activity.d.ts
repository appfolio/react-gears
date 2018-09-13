import Omit from './TypeHelpers/Omit';
import { ListGroupItemProps } from 'reactstrap/lib/ListGroupItem';
import * as React from 'react';

export interface ActivityProps extends Omit<ListGroupItemProps, 'action'> {
  action?: JSX.Element | string;
  by?: JSX.Element | string;
  children?: JSX.Element | string;
  date: Date;
  dateFormat?: string;
  isOpen?: boolean;
  toggle?: () => void;
}

declare class Activity extends React.Component<ActivityProps, {}> {}
export default Activity;
