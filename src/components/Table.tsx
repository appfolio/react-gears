import type { FunctionComponent } from 'react';
import React from 'react';
import type { TableProps as ReactStrapTableProps } from 'reactstrap';
import { Table as TableComponent } from 'reactstrap';

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

const Table: FunctionComponent<TableProps> = ({ children, ...props }) => (
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
