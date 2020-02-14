import React from 'react';
import PropTypes from 'prop-types';
import orderBy from 'lodash.orderby';
import some from 'lodash.some';
import isEqual from 'lodash.isequal';
import Paginator from './Paginator';
import SortableTable from './SortableTable';

export default class UncontrolledTable extends React.Component {
  static propTypes = {
    ...SortableTable.propTypes,
    expanded: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onExpand: PropTypes.func,
    onPageChange: PropTypes.func,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    selected: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    sort: PropTypes.shape({
      column: PropTypes.string,
      ascending: PropTypes.bool
    }),
    onSelect: PropTypes.func,
    onSort: PropTypes.func
  };

  static defaultProps = {
    ...SortableTable.defaultProps,
    onExpand: () => {},
    expanded: [],
    onPageChange: () => {},
    page: 0,
    pageSize: 10,
    selected: [],
    sort: {
      ascending: true
    },
    onSelect: () => {},
    onSort: () => {}
  };

  state = {
    sort: this.props.sort,
    expanded: this.props.expanded,
    selected: this.props.selected,
    page: this.props.page
  }

  sortedData = (rows, column, ascending) => orderBy(
    rows,
    [column],
    [ascending ? 'asc' : 'desc']
  );

  sortBy = (column, ascending) => {
    let sort;
    if (this.state.sort.column === column) {
      sort = {
        column,
        ascending
      };
    } else {
      sort = {
        column,
        ascending: true
      };
    }
    this.setState({ sort }, () => this.props.onSort(sort));
  };

  get someSelected() {
    return this.state.selected.length > 0;
  }

  get allSelected() {
    return this.props.rows.length && (this.state.selected.length === this.props.rows.length);
  }

  selected(value) {
    return some(this.state.selected, value);
  }

  toggleSelection = (value) => {
    const selected = this.state.selected;
    const newSelection = some(selected, value)
      ? selected.filter(selectedRow => !isEqual(selectedRow, value))
      : [...selected, value];

    this.setState({ selected: newSelection }, () => {
      this.props.onSelect(newSelection);
    });
  };

  toggleAll = () => {
    const newSelection = this.allSelected ? [] : this.props.rows;

    this.setState({ selected: newSelection }, () => {
      this.props.onSelect(newSelection);
    });
  };

  expanded(value) {
    return some(this.state.expanded, value);
  }

  toggleExpanded = (value) => {
    const expanded = this.state.expanded;
    const newExpanded = some(expanded, value)
      ? expanded.filter(expandedRow => !isEqual(expandedRow, value))
      : [...expanded, value];

    this.setState({ expanded: newExpanded }, () =>
      this.props.onExpand(newExpanded)
    );
  };

  setPage = (page) => {
    this.setState({ page });
    this.props.onPageChange(page);
  }

  //eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    const rowsChanged = isEqual(this.props.rows, nextProps.rows);

    const selectableChanged = nextProps.selectable !== this.props.selectable;
    const expandableChanged = nextProps.expandable !== this.props.expandable;
    const expandedChanged = nextProps.expanded !== this.props.expanded;
    const selectedChanged = nextProps.selected !== this.props.selected;

    // Clear selection if rows or selectable change
    if (rowsChanged || selectableChanged) {
      this.setState({ selected: [] });
    }

    if (rowsChanged || expandableChanged) {
      this.setState({ expanded: [] });
    }

    if (rowsChanged) {
      this.setState({ page: 0 });
    }

    if (selectedChanged) {
      this.setState({ selected: nextProps.selected });
    }

    if (expandedChanged) {
      this.setState({ expanded: nextProps.expanded });
    }
  }

  render() {
    const { page } = this.state;
    const { ascending, column } = this.state.sort;
    const { columns, expandable, pageSize, paginated, rowExpanded, rows, selectable, sort, onSelect, onExpand, onSort, onPageChange, ...props } = this.props;
    const cols = columns
      .filter(col => !col.hidden)
      .map(col => (col.sortable !== false) ?
        {
          active: column === col.key,
          ascending,
          onSort: asc => this.sortBy(col.key, asc),
          ...col
        } : col
      );

    const selectableProps = selectable ? {
      rowSelected: row => this.selected(row),
      onSelect: row => this.toggleSelection(row),
      onSelectAll: () => this.toggleAll(),
      allSelected: this.allSelected
    } : undefined;

    const expandableProps = expandable ? {
      rowExpanded: row => this.expanded(row) && rowExpanded(row),
      onExpand: row => this.toggleExpanded(row)
    } : undefined;

    const start = page * pageSize;
    const end = start + pageSize;
    const sortedRows = this.sortedData(rows, column, ascending);
    const visibleRows = paginated ? sortedRows.slice(start, end) : sortedRows;

    return (
      <div>
        <SortableTable
          {...props}
          columns={cols}
          rows={visibleRows}
          {...expandableProps}
          {...selectableProps}
        />
        {paginated && [
          <hr key="separator" />,
          <Paginator
            key="paginator"
            currentPage={page + 1}
            onClick={pg => this.setPage(pg - 1)}
            perPage={pageSize}
            totalItems={rows.length}
          />
        ]}
      </div>
    );
  }
}
