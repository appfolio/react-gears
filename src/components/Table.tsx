import React from 'react';
import TableComponent from 'reactstrap/lib/Table';

export interface TableProps {
  size?: string;
  bordered?: boolean;
  borderless?: boolean;
  striped?: boolean;
  dark?: boolean;
  hover?: boolean;
  responsive?: boolean;
}

class Table extends React.Component<TableProps, {}> {
  static displayName = 'Table';

  static defaultProps = {
    hover: true,
    responsive: true,
    size: 'sm',
    striped: true
  };

  render() {
    return (
      <TableComponent {...this.props}>
        {this.props.children}
      </TableComponent>
    );
  }
}

export default Table;
