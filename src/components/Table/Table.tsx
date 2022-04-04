import React, { type FC } from 'react';
import { type TableProps as ReactStrapTableProps, Table as TableComponent } from 'reactstrap';

export interface TableProps extends ReactStrapTableProps {
  size?: string;
  bordered?: boolean;
  borderless?: boolean;
  striped?: boolean;
  dark?: boolean;
  hover?: boolean;
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const Table: FC<TableProps> = ({ children, ...props }) => (
  <TableComponent {...props}>{children}</TableComponent>
);

Table.displayName = 'Table';

Table.defaultProps = {
  hover: true,
  responsive: true,
  size: 'sm',
  striped: true,
};

export default Table;
