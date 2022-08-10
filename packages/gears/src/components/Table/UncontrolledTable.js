import isEqual from 'lodash.isequal';
import orderBy from 'lodash.orderby';
import some from 'lodash.some';
import PropTypes from 'prop-types';
import React from 'react';
import Paginator from '../Pagination/Paginator';
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
      ascending: PropTypes.bool,
    }),
    onSelect: PropTypes.func,
    onSort: PropTypes.func,
    onVisibleRowsChange: PropTypes.func,
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
      ascending: true,
    },
    onSelect: () => {},
    onSort: () => {},
    onVisibleRowsChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      sort: props.sort,
      expanded: props.expanded,
      selected: props.selected,
      page: props.page,
    };
  }

  sortedData = (rows, column, ascending) => orderBy(rows, [column], [ascending ? 'asc' : 'desc']);

  sortBy = (column, ascending) => {
    let sort;
    if (this.state.sort.column === column) {
      sort = {
        column,
        ascending,
      };
    } else {
      sort = {
        column,
        ascending: true,
      };
    }
    this.setState({ sort }, () => this.props.onSort(sort));
  };

  get allSelected() {
    return this.props.rows.length && this.state.selected.length === this.props.rows.length;
  }

  selected(value) {
    return some(this.state.selected, value);
  }

  toggleSelection = (value) => {
    const selected = this.state.selected;
    const newSelection = some(selected, value)
      ? selected.filter((selectedRow) => !isEqual(selectedRow, value))
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
      ? expanded.filter((expandedRow) => !isEqual(expandedRow, value))
      : [...expanded, value];

    this.setState({ expanded: newExpanded }, () => this.props.onExpand(newExpanded));
  };

  setPage = (page) => {
    this.setState({ page });
    this.props.onPageChange(page);
  };

  isEqualUsingKeys = (newArray, oldArray) => {
    const hasKey = (element) => element.key !== undefined;
    if (!(newArray.every(hasKey) && oldArray.every(hasKey))) {
      return newArray === oldArray;
    }

    const keys = oldArray.map((el) => el.key).sort();
    const newKeys = newArray.map((el) => el.key).sort();
    return isEqual(keys, newKeys);
  };

  getVisibleRows = () => {
    const { page } = this.state;
    const { ascending, column } = this.state.sort;
    const { paginated, pageSize, rows } = this.props;

    const start = page * pageSize;
    const end = start + pageSize;
    const sortedRows = this.sortedData(rows, column, ascending);
    return paginated ? sortedRows.slice(start, end) : sortedRows;
  };

  visibleRowsChanged(prevProps, prevState) {
    const { page } = this.state;
    const { ascending, column } = this.state.sort;
    const { paginated, pageSize, rows } = this.props;

    const { page: prevPage } = prevState;
    const { ascending: prevAscending, column: prevColumn } = prevState.sort;
    const { paginated: prevPaginated, pageSize: prevPageSize, rows: prevRows } = prevProps;

    return (
      page !== prevPage ||
      ascending !== prevAscending ||
      column !== prevColumn ||
      paginated !== prevPaginated ||
      pageSize !== prevPageSize ||
      !this.isEqualUsingKeys(rows, prevRows)
    );
  }

  componentDidMount() {
    this.props.onVisibleRowsChange(this.getVisibleRows());
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const selectableChanged = nextProps.selectable !== this.props.selectable;
    const expandableChanged = nextProps.expandable !== this.props.expandable;

    const expandedChanged = !this.isEqualUsingKeys(this.props.expanded, nextProps.expanded);
    const selectedChanged = !this.isEqualUsingKeys(this.props.selected, nextProps.selected);
    const rowsChanged = !this.isEqualUsingKeys(this.props.rows, nextProps.rows);

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

  componentDidUpdate(prevProps, prevState) {
    if (this.visibleRowsChanged(prevProps, prevState)) {
      this.props.onVisibleRowsChange(this.getVisibleRows());
    }
  }

  render() {
    const { page } = this.state;
    const { ascending, column } = this.state.sort;
    /* eslint-disable @typescript-eslint/no-unused-vars -- This will be resolved when this is a function component */
    const {
      columns,
      expandable,
      pageSize,
      paginated,
      rowExpanded,
      rows,
      selectable,
      sort,
      onSelect,
      onExpand,
      onSort,
      onPageChange,
      onVisibleRowsChange,
      ...props
    } = this.props;
    /* eslint-enable @typescript-eslint/no-unused-vars */
    const cols = columns
      .filter((col) => !col.hidden)
      .map((col) =>
        col.sortable !== false
          ? {
              active: column === col.key,
              ascending,
              onSort: (asc) => this.sortBy(col.key, asc),
              ...col,
            }
          : col
      );

    const selectableProps = selectable
      ? {
          rowSelected: (row) => this.selected(row),
          onSelect: (row) => this.toggleSelection(row),
          onSelectAll: () => this.toggleAll(),
          allSelected: this.allSelected,
        }
      : undefined;

    const expandableProps = expandable
      ? {
          rowExpanded: (row) => this.expanded(row) && rowExpanded(row),
          onExpand: (row) => this.toggleExpanded(row),
        }
      : undefined;

    const visibleRows = this.getVisibleRows();

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
            onClick={(pg) => this.setPage(pg - 1)}
            perPage={pageSize}
            totalItems={rows.length}
          />,
        ]}
      </div>
    );
  }
}
