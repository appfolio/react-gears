import React, { MouseEvent, ReactNode } from 'react';
import Icon from '../Icon';

export interface HeaderProps {
  active?: boolean;
  ascending?: boolean;
  children: ReactNode;
  className?: string;
  onSort?: ((event: MouseEvent) => void) | undefined;
}

const Header = ({ active, ascending, children, className, onSort, ...props }: HeaderProps) => (
  <th
    className={className}
    onClick={onSort}
    style={{
      cursor: onSort ? 'pointer' : 'initial',
    }}
    {...props}
  >
    {children}
    {onSort && <Icon name={active ? `caret-${ascending ? 'up' : 'down'}` : 'sort'} fixedWidth />}
    <style jsx>
      {`
        th {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}
    </style>
  </th>
);

Header.displayName = 'Header';

Header.defaultProps = {
  active: false,
  ascending: true,
};

export default Header;
