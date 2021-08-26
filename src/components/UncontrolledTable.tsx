import React, { useEffect, useRef, useState } from 'react';
import orderBy from 'lodash.orderby';
import Paginator from './Paginator';
import Placeholder from './Placeholder';
import SortableTable, {
  SortableTablePropsBase, TableRow, defaultProps as sortableTableDefaultProps
} from './SortableTable';
import { useExpand, useMultiSelect, usePagination, useSort } from '../hooks/table';

interface Sort {
  column?: string,
  ascending: boolean,
}

interface LoadRowsParams {
  paginated?: boolean;
  currentPage: number;
  pageSize: number;
  sortAscending: boolean;
  sortKey?: string;
  rows?: any[];
}

interface LoadRowsResult<T> {
  data: T[],
  total: number,
}

interface UncontrolledTableProps<T extends TableRow> extends SortableTablePropsBase<T> {
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
  loadRows?: (params: LoadRowsParams) => Promise<LoadRowsResult<T>> | LoadRowsResult<T>,
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
  onSort: () => {},
  loadRows: ({ paginated, currentPage, pageSize, sortAscending, sortKey, rows = [] }: LoadRowsParams): LoadRowsResult<any> => {
    const sortedRows = orderBy(rows, [sortKey], [sortAscending ? 'asc' : 'desc']);

    const start = currentPage * pageSize;
    const end = start + pageSize;
    return {
      data: paginated ? sortedRows.slice(start, end) : sortedRows,
      total: rows.length,
    };
  }
};

function keyComparableArray<T extends TableRow>(arr: T[]) {
  const keys = arr.map(el => el.key);
  const keySet = new Set(keys);

  if (keySet.has(undefined)) return arr;
  return JSON.stringify(keys.sort());
}

function UncontrolledTable<T extends TableRow>({
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
  loadRows = defaultProps.loadRows,
  rows: rowsProp,
  ...props
}: UncontrolledTableProps<T>) {
  const isMounted = useRef(false);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<T[]>([]);
  const { sortBy, sortKey, sortAscending } = useSort(sort.column, sort.ascending);
  const { expanded, setExpanded, isExpanded, toggleExpanded } = useExpand(expandedProp);
  const { currentPage, setCurrentPage, pageSize, totalItems, setTotalItems } = usePagination({ page, size: pageSizeProp });
  const { selected, setSelected, allSelected, isSelected, toggleAll, toggleSelection } = useMultiSelect(selectedProp);

  useEffect(() => {
    const fetchRows = async () => {
      setLoading(true);
      const { data, total } = await loadRows({ paginated, currentPage, pageSize, sortAscending, sortKey, rows: rowsProp });
      setRows(data);
      setTotalItems(total);
      setLoading(false);
    };

    fetchRows();
  }, [rowsProp, loadRows, currentPage, pageSize, sortAscending, sortKey, paginated, setRows, setTotalItems, setLoading]);

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
  const rowsComp = keyComparableArray(rowsProp);
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
        ...col,
        active: sortKey === col.key,
        ascending: sortAscending,
        onSort: (asc: boolean) => sortBy(col.key, asc),
        cell: loading ? () => <Placeholder /> : col.cell,
      } : col
    );

  const selectableProps = selectable ? {
    rowSelected: (row: T) => isSelected(row),
    onSelect: (row: T) => toggleSelection(row),
    onSelectAll: () => toggleAll(rowsProp),
    allSelected: allSelected(rowsProp)
  } : undefined;

  const expandableProps = expandable ? {
    rowExpanded: (row: T) => isExpanded(row) && rowExpanded(row),
    onExpand: (row: T) => toggleExpanded(row)
  } : undefined;

  return (
    <div>
      <SortableTable
        {...props}
        columns={cols}
        rows={loading ? Array.from(Array(pageSize), () => ({ disabled: true } as T)) : rows}
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
