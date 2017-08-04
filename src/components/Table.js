import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Table } from 'reactstrap';

class TableComponent extends Component {
  static displayName = 'Table';
  static propTypes = {
    size: PropTypes.string,
    bordered: PropTypes.bool,
    striped: PropTypes.bool,
    inverse: PropTypes.bool,
    hover: PropTypes.bool,
    reflow: PropTypes.bool,
    responsive: PropTypes.bool
  }
  static defaultProps = {
    hover: true,
    responsive: true,
    size: 'sm',
    striped: true
  };

  render() {
    return (
      <Table {...this.props}>
        {this.props.children}
      </Table>
    );
  }
}

export default TableComponent;
