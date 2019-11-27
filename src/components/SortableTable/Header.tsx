import React, { MouseEvent, ReactNode } from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import styles from './Header.scss';

interface HeaderProps {
  active?: boolean;
  ascending?: boolean;
  children: ReactNode;
  className?: string;
  onSort?: ((event: MouseEvent) => void) | undefined;
}

const Header = ({ active, ascending, children, className, onSort, ...props }: HeaderProps) => {
  const classNames = classnames(className, styles.header);
  return (
    <th
      className={classNames}
      onClick={onSort}
      style={{
        cursor: onSort ? 'pointer' : 'initial'
      }}
      {...props}
    >
      {children}
      {onSort &&
        <Icon
          name={active ? `caret-${ascending ? 'up' : 'down'}` : 'sort'}
          fixedWidth
        />
      }
    </th>
  );
};

Header.displayName = 'Header';

Header.defaultProps = {
  active: false,
  ascending: true
};

export default Header;
