import React from 'react';
import PropTypes from 'prop-types';
import SortableTable from './SortableTable';


class EditableTable extends React.Component {
  static propTypes = {
    ...SortableTable.propTypes,
    editable: PropTypes.bool
  };

  static defaultProps = {
    ...SortableTable.defaultProps,
    editable: false,
    rowExpanded: () => undefined
  };

  rowOnClick = (row) => {
    if (this.props.editable) this.setState({ activeRow: row });
  }

  state = {
    activeRow: null
  }

  render() {
    const { columns, editable, rowOnClick, rowExpanded, ...props } = this.props;

    const editableColumns = columns.map(({ cell, edit, ...column }) => {
      return {
        ...column,
        cell: row => ((editable && this.state.activeRow === row && edit) ? edit(row) : cell(row))
      };
    });
    return (
      <SortableTable
        columns={editableColumns}
        rowOnClick={this.rowOnClick}
        rowExpanded={row => rowExpanded(row, this.state.activeRow === row)}
        {...props}
      />
    );
  }
}
export default EditableTable;
