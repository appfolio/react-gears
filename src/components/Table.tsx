import PropTypes from 'prop-types';
import React from 'react';
import TableComponent from 'reactstrap/lib/Table';

class Table extends React.Component {
  static displayName = 'Table';
  static propTypes = {
    size: PropTypes.string,
    bordered: PropTypes.bool,
    borderless: PropTypes.bool,
    striped: PropTypes.bool,
    dark: PropTypes.bool,
    hover: PropTypes.bool,
    responsive: PropTypes.bool,
    children: PropTypes.node
  }
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
