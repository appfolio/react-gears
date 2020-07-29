import React, { FunctionComponent } from 'react';
import TableComponent, { TableProps as ReactStrapTableProps } from 'reactstrap/lib/Table';

export interface TableProps extends ReactStrapTableProps {
  size?: string;
  bordered?: boolean;
  borderless?: boolean;
  striped?: boolean;
  dark?: boolean;
  hover?: boolean;
  responsive?: boolean;
  children: React.ReactNode;
}

const Table: FunctionComponent<TableProps> = ({
  children,
  ...props
}) =>  {
  return (
    <TableComponent {...props}>
      {children}
    </TableComponent>
  );
};

Table.displayName = 'Table';

Table.defaultProps = {
  hover: true,
  responsive: true,
  size: 'sm',
  striped: true
};

export default Table;
