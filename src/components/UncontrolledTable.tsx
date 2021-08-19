import React, { useEffect, useRef } from 'react';
import orderBy from 'lodash.orderby';
import Paginator from './Paginator';
import SortableTable, {
  SortableTablePropsBase, MayHaveKey, defaultProps as sortableTableDefaultProps
} from './SortableTable';
import { useExpand, useMultiSelect, usePagination, useSort } from '../hooks/table';

interface Sort {
  column?: string,
  ascending: boolean,
}

interface UncontrolledTableProps<T extends MayHaveKey> extends SortableTablePropsBase<T> {
  expandable?: boolean,
  expanded?: T[],
  rowExpanded?: (row: T) => React.ReactNode,
  onExpand?: (newExpanded: T[]) => void,
  selectable?: boolean,
  selected?: T[],
  onSelect?: (newSelection: T[]) => void,
  sort?: Sort,
  onSort?: (sort: Sort) => void,
  paginated?: boolean
  onPageChange?: (page: number) => void,
  page?: number,
  pageSize?: number,
}

const defaultProps = {
  ...sortableTableDefaultProps,
  onExpand: () => {},
  expanded: [],
  rowExpanded: () => null,
  onPageChange: () => {},
  page: 0,
  pageSize: 10,
  selected: [],
  onSelect: () => {},
  sort: {
    ascending: true
  },
  onSort: () => {}
};

const sortedData = (rows: any[], column: string | undefined, ascending: boolean) => orderBy(
  rows,
  [column],
  [ascending ? 'asc' : 'desc']
);

function keyComparableArray<T extends MayHaveKey>(arr: T[]) {
  const keys = arr.map(el => el.key);
  const keySet = new Set(keys);

  if (keySet.has(undefined)) return arr;
  return JSON.stringify(keys.sort());
}

function UncontrolledTable<T extends MayHaveKey>({
  onExpand = defaultProps.onExpand,
  expanded: expandedProp = defaultProps.expanded,
  rowExpanded = defaultProps.rowExpanded,
  onPageChange = defaultProps.onPageChange,
  page = defaultProps.page,
  pageSize: pageSizeProp = defaultProps.pageSize,
  selected: selectedProp = defaultProps.selected,
  onSelect = defaultProps.onSelect,
  sort = defaultProps.sort,
  onSort = defaultProps.onSort,
  expandable,
  selectable,
  paginated,
  ...props
}: UncontrolledTableProps<T>) {
  const isMounted = useRef(false);
  const { sortBy, sortKey, sortAscending } = useSort(sort.column, sort.ascending);
  const { expanded, setExpanded, isExpanded, toggleExpanded } = useExpand(expandedProp);
  const { currentPage, setCurrentPage, pageSize, totalItems } = usePagination({ page, size: pageSizeProp, total: props.rows.length });
  const { selected, setSelected, allSelected, isSelected, toggleAll, toggleSelection } = useMultiSelect(selectedProp);
  /*
   * State updates triggered by prop changes. We should eventually remove this feature,
   * since this component is supposed to be uncontrolled.
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setExpanded(expandedProp), [keyComparableArray(expandedProp), setExpanded]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setSelected(selectedProp), [keyComparableArray(selectedProp), setSelected]);

  /*
   * Reset selection/expansion/pagination state.
   */
  const rowsComp = keyComparableArray(props.rows);
  useEffect(() => { if (isMounted.current) setSelected([]); }, [selectable, rowsComp, setSelected]);
  useEffect(() => { if (isMounted.current) setExpanded([]); }, [expandable, rowsComp, setExpanded]);
  useEffect(() => { if (isMounted.current) setCurrentPage(0); }, [rowsComp, setCurrentPage]);
  useEffect(() => { isMounted.current = true; }, []);

  /*
   * Trigger provided callback functions.
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onExpand(expanded); }, [keyComparableArray(expanded), onExpand]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onSelect(selected); }, [keyComparableArray(selected), onSelect]);
  useEffect(() => { onSort({ column: sortKey, ascending: sortAscending }); }, [sortKey, sortAscending, onSort]);
  useEffect(() => { onPageChange(currentPage); }, [currentPage, onPageChange]);

  const cols = props.columns
    .filter(col => !col.hidden)
    .map(col => (col.sortable !== false) ?
      {
        active: sortKey === col.key,
        ascending: sortAscending,
        onSort: (asc: boolean) => sortBy(col.key, asc),
        ...col
      } : col
    );

  const selectableProps = selectable ? {
    rowSelected: (row: T) => isSelected(row),
    onSelect: (row: T) => toggleSelection(row),
    onSelectAll: () => toggleAll(props.rows),
    allSelected: allSelected(props.rows)
  } : undefined;

  const expandableProps = expandable ? {
    rowExpanded: (row: T) => isExpanded(row) && rowExpanded(row),
    onExpand: (row: T) => toggleExpanded(row)
  } : undefined;

  const start = currentPage * pageSize;
  const end = start + pageSize;
  const sortedRows = sortedData(props.rows, sortKey, sortAscending);
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
          currentPage={currentPage + 1}
          onClick={pg => setCurrentPage(pg - 1)}
          perPage={pageSize}
          totalItems={totalItems}
        />
      ]}
    </div>
  );
}

UncontrolledTable.defaultProps = defaultProps;

export default UncontrolledTable;
