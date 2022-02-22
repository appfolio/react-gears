import React, { FunctionComponent } from 'react';
import TableComponent, { TableProps as ReactStrapTableProps } from 'reactstrap/lib/Table';

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

const Table: FunctionComponent<TableProps> = ({
  children,
  responsive = true,
  size = 'sm',
  striped = true,
  hover = true,
  ...props
}) => (
  <TableComponent hover={hover} responsive={responsive} size={size} striped={striped} {...props}>
    {children}
  </TableComponent>
);

Table.displayName = 'Table';

export default Table;
