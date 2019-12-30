import { Component, MouseEvent, ReactNode } from 'react';

export interface HeaderProps {
  active?: boolean;
  ascending?: boolean;
  children: ReactNode;
  className?: string;
  onSort?: ((event: MouseEvent) => void) | null;
}
declare class Header extends Component<HeaderProps, {}> { }
export default Header;
