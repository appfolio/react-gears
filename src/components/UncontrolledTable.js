import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import orderBy from 'lodash.orderby';
import some from 'lodash.some';
import isEqual from 'lodash.isequal';
import Button from './Button';
import Icon from './Icon';
import Paginator from './Paginator';
import SortableTable from './SortableTable';

export default class UncontrolledTable extends React.Component {
  static propTypes = {
    ...SortableTable.propTypes,
    expandColumnProps: PropTypes.object,
    expanded: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onExpand: PropTypes.func,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    selected: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    sort: PropTypes.shape({
      column: PropTypes.string,
      ascending: PropTypes.bool
    }),
    onSelect: PropTypes.func
  };

  static defaultProps = {
    ...SortableTable.defaultProps,
    onExpand: () => {},
    expandColumnProps: {},
    expanded: [],
    page: 0,
    pageSize: 10,
    selected: [],
    sort: {
      ascending: true
    },
    onSelect: () => {}
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
  }

  componentWillReceiveProps(nextProps) {
    // Clear selection if rows or selectable change
    if (nextProps.rows !== this.props.rows ||
      nextProps.selectable !== this.props.selectable) {
      this.setState({ selected: [] });
    }
    if (nextProps.rows !== this.props.rows ||
      nextProps.expandable !== this.props.expandable) {
      this.setState({ expanded: [] });
    }
    if (nextProps.rows !== this.props.rows) {
      this.setState({ page: 0 });
    }
    if (nextProps.selected) {
      this.setState({ selected: nextProps.selected });
    }
    if (nextProps.expanded !== this.props.expanded) {
      this.setState({ expanded: nextProps.expanded });
    }
  }

  render() {
    const { page } = this.state;
    const { ascending, column } = this.state.sort;
    const { columns, expandable, pageSize, paginated, rowClassName, rowExpanded, rows, selectable, sort, onSelect, onExpand, expandColumnProps, ...props } = this.props;
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

    if (selectable) {
      cols.unshift({
        align: 'center',
        key: 'select',
        header: (
          <input
            type="checkbox"
            className="mx-1"
            checked={this.allSelected}
            onChange={this.toggleAll}
          />
        ),
        cell: row => (
          <input
            type="checkbox"
            className="mx-1"
            checked={this.selected(row)}
            onChange={() => this.toggleSelection(row)}
          />
        ),
        width: '2rem'
      });
    }

    if (expandable) {
      cols.push({
        align: 'center',
        key: 'expand',
        cell: row => (
          <Button
            className="px-2 py-0"
            color="link"
            onClick={() => this.toggleExpanded(row)}
          >
            <Icon name="ellipsis-v" size="lg" />
          </Button>
        ),
        width: '2rem',
        ...expandColumnProps
      });
    }

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
          rowClassName={row => classnames({ 'table-info': this.selected(row) }, rowClassName(row))}
          rowExpanded={row => expandable && this.expanded(row) && rowExpanded(row)}
        />
        {paginated && [
          <hr />,
          <Paginator
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
