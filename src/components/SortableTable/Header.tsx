import React from 'react';
import type { FC, MouseEvent } from 'react';
import Icon from '../Icon';

export interface HeaderProps {
  active?: boolean;
  ascending?: boolean;
  className?: string;
  onSort?: ((event: MouseEvent) => void) | undefined;
}

const defaultProps = {
  active: false,
  ascending: true,
};

const Header: FC<HeaderProps> = ({
  active = defaultProps.active,
  ascending = defaultProps.ascending,
  children,
  className,
  onSort,
  ...props
}) => (
  <th
    className={className}
    onClick={onSort}
    style={{
      cursor: onSort ? 'pointer' : 'initial',
    }}
    {...props}
  >
    {children}
    {onSort && (
      <Icon
        name={active ? `caret-${ascending ? 'up' : 'down'}` : 'sort'}
        fixedWidth
      />
    )}
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

export default Header;
