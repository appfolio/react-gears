import { Component, MouseEvent } from 'react';
import OneOrMore from '../TypeHelpers/OneOrMore';

type Child = (JSX.Element | string)

export interface HeaderProps {
  active: boolean;
  ascending: boolean;
  children: OneOrMore<Child>;
  className: string;
  onSort: ((event: MouseEvent) => void) | null;
}
declare class Header extends Component<HeaderProps, {}> { }
export default Header;
