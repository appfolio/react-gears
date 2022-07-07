import classNames from 'classnames';
import React, { ReactElement } from 'react';

interface ListHeaderProps {
  children: ReactElement[];
  className?: string;
}

const ListHeader = ({ children, className }: ListHeaderProps) => {
  const classes = classNames('d-flex bg-secondary p-3 rounded-top', className);
  return <div className={classes}>{children}</div>;
};

export default ListHeader;
