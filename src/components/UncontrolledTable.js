import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import includes from 'lodash.includes';
import orderBy from 'lodash.orderby';
import without from 'lodash.without';
import SortableTable from './SortableTable';

export default class UncontrolledTable extends React.Component {
  static propTypes = {
    ...SortableTable.propTypes,
    sort: PropTypes.shape({
      column: PropTypes.string.isRequired,
      ascending: PropTypes.bool.isRequired
    })
  }

  static defaultProps = {
    ...SortableTable.defaultProps,
    sort: {
      ascending: true // TODO or: `sort={{ last, 'asc' }}` ?
    }
  }

  state = {
    sort: this.props.sort,
    selected: []
  }

  // TODO pagination

  sortedData = (rows, column, ascending) => orderBy(
    rows,
    [column],
    [ascending ? 'asc' : 'desc']
  );

  sortBy = (column, ascending) => {
    if (this.state.sort.column === column) {
      this.setState({
        sort: {
          column,
          ascending
        }
      });
    } else {
      this.setState({
        sort: {
          column,
          ascending: true
        }
      });
    }
  };

  get someSelected() {
    return this.state.selected.length > 0;
  }

  get allSelected() {
    return this.props.rows.length && (this.state.selected.length === this.props.rows.length);
  }

  selected(value) {
    return includes(this.state.selected, value);
  }

  toggleSelection = (value) => {
    const selected = this.state.selected;
    const newSelection = includes(selected, value) ?
      without(selected, value) :
      [...selected, value];

    this.setState({ selected: newSelection },
      this.props.onSelect(newSelection)
    );
  };

  toggleAll = () => {
    const newSelection = this.allSelected ? [] : this.props.rows;

    this.setState({ selected: newSelection },
      this.props.onSelect(newSelection)
    );
  };

  componentWillReceiveProps(nextProps) {
    // Clear selection if rows or selectable change
    if (nextProps.rows !== this.props.rows ||
      nextProps.selectable !== this.props.selectable) {
      this.setState({ selected: [] });
    }
  }

  render() {
    const { sort } = this.state;
    const { ascending, column } = sort;
    const { columns, rowClassName, rows, selectable, onSelect, ...props } = this.props;
    const cols = columns.map((col) => {
      return {
        active: column === col.key,
        ascending,
        onSort: asc => this.sortBy(col.key, asc),
        ...col
      };
    });
    if (selectable) {
      cols.unshift({
        header: (
          <input
            type="checkbox"
            className="mx-1"
            checked={this.allSelected}
            onChange={() => this.toggleAll()}
          />
        ),
        key: 'select',
        cell: row => (
          <input
            type="checkbox"
            className="mx-1"
            checked={this.selected(row)}
            onChange={() => this.toggleSelection(row)}
          />
        ),
        width: '1%'
      });
    }
    return (
      <SortableTable
        {...props}
        columns={cols}
        rows={this.sortedData(rows, column, ascending)}
        rowClassName={row => classnames({ 'table-info': this.selected(row) }, rowClassName(row))}
      />
    );
  }
}
