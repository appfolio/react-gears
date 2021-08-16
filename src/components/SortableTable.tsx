import React from 'react';
import classnames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import Header, { HeaderProps } from './SortableTable/Header';
import Button from './Button';
import Icon from './Icon';
import Label from './Label';
import Table, { TableProps } from './Table';

function generateColumnClassName<T>(column: SortableColumn<T>, truncate = false) {
  return classnames(
    truncate && 'text-truncate',
    column.align && `text-${column.align}`,
    column.className
  );
}

function defaultRenderRow<T extends MayHaveKey>(
  row: T, columns: SortableColumn<T>[], rowClassName: SortableTableProps<T>['rowClassName'],
  rowExpanded: SortableTablePropsExpandable<T>['rowExpanded'], rowOnClick: SortableTableProps<T>['rowOnClick'],
  truncate: SortableTableProps<T>['truncate'], rowSelected: SortableTablePropsSelectable<T>['rowSelected']
) {
  const expanded = rowExpanded && rowExpanded(row);
  return [
    <tr
      key={row.key}
      className={classnames({ 'table-primary': rowSelected && rowSelected(row) }, rowClassName && rowClassName(row))}
      onClick={e => rowOnClick && rowOnClick(row, e)}
      role={rowOnClick ? 'button' : undefined}
    >
      {columns.map(column => (
        <td key={column.key} className={generateColumnClassName(column, truncate)}>
          {column.cell(row, expanded)}
        </td>
      ))}
    </tr>,
    expanded && <tr key={row.key ? `${row.key}-hidden` : undefined} hidden />,
    expanded && (
      <tr
        key={row.key ? `${row.key}-expanded` : undefined}
        className={classnames({ 'table-primary': rowSelected && rowSelected(row) }, 'tr-expanded')}
      >
        <td className="border-top-0" colSpan={columns.length}>
          {expanded}
        </td>
      </tr>
    ),
  ];
}

type HorizontalAlignment = 'left' | 'center' | 'right';

export interface MayHaveKey {
  key?: string;
}

export interface SortableColumn<T extends MayHaveKey>
  extends Omit<HeaderProps, 'children' | 'onSort'> {
  align?: HorizontalAlignment;
  cell: (row: T, expanded?: React.ReactNode) => React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  key: string;
  onSort?: (ascending: boolean) => void;
  width?: string;
  [key: string]: any;
}

export interface SortableTablePropsBase<T extends MayHaveKey> extends Omit<TableProps, 'children'> {
  className?: string;
  allSelected?: boolean;
  columns: SortableColumn<T>[];
  expandableColumn?: Partial<SortableColumn<T>>;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  renderRow?: typeof defaultRenderRow;
  rows: T[];
  rowClassName?: (row: T) => React.ReactNode | undefined;
  rowOnClick?: (row: T, evt: React.MouseEvent) => void;
  truncate?: boolean;
}

interface SortableTablePropsExpandable<T extends MayHaveKey> extends SortableTablePropsBase<T> {
  onExpand: (row: T) => void;
  rowExpanded: (row: T) => React.ReactNode | boolean;
}

interface SortableTablePropsSelectable<T extends MayHaveKey> extends SortableTablePropsBase<T> {
  onSelect: (row: T, selected: boolean) => void;
  onSelectAll: (selected: boolean) => void;
  rowSelected: (row: T) => boolean;
}

interface SortableTablePropsExpandableSelectable<T extends MayHaveKey> extends SortableTablePropsBase<T> {
  onExpand: (row: T) => void;
  rowExpanded: (row: T) => React.ReactNode | boolean;
  onSelect: (row: T, selected: boolean) => void;
  onSelectAll: (selected: boolean) => void;
  rowSelected: (row: T) => boolean;
}

export type SortableTableProps<T extends MayHaveKey> = SortableTablePropsBase<T> | SortableTablePropsExpandable<T> | SortableTablePropsSelectable<T> | SortableTablePropsExpandableSelectable<T>;

export const defaultProps = {
  ...Table.defaultProps,
  expandableColumn: {},
  rowClassName: () => undefined,
  rowExpanded: () => false,
  truncate: false,
  renderRow: defaultRenderRow,
  rows: [],
};

export default function SortableTable<T>({
  columns, header, footer, rowClassName = defaultProps.rowClassName, rowOnClick, rows = defaultProps.rows, style,
  truncate = defaultProps.truncate, allSelected, onSelect, onSelectAll, rowSelected,
  expandableColumn = defaultProps.expandableColumn, onExpand, rowExpanded = defaultProps.rowExpanded,
  renderRow = defaultProps.renderRow, ...props
}: SortableTableProps<T>) {
  const selectable = rowSelected;
  const expandable = onExpand;
  const showColgroup = selectable || expandable || columns.some(column => column.width);
  const showFooter = columns.some(column => column.footer);
  const tableStyle = {
    tableLayout: truncate ? 'fixed' : 'auto',
    ...style
  };

  const cols = [...columns];

  if (selectable) {
    const selectAllId = uniqueId('select-all-');
    cols.unshift({
      align: 'center',
      key: 'select',
      header: (
        <>
          <Label for={selectAllId} hidden>Select all rows</Label>
          <input
            type="checkbox"
            className="mx-1"
            id={selectAllId}
            checked={allSelected}
            onClick={e => e.stopPropagation()}
            onChange={e => onSelectAll(e.target.checked)}
          />
        </>
      ),
      cell: (row) => {
        const selectRowId = uniqueId('select-row-');
        return (
          <>
            <Label for={selectRowId} hidden>Select row</Label>
            <input
              id={selectRowId}
              type="checkbox"
              className="mx-1"
              checked={rowSelected(row)}
              onClick={e => e.stopPropagation()}
              onChange={e => onSelect(row, e.target.checked)}
            />
          </>);
      },
      width: '2rem'
    });
  }

  if (expandable) {
    cols.push({
      align: 'center',
      key: 'expand',
      cell: (row, expanded) => (
        <Button
          className="px-2 py-0"
          color="link"
          onClick={() => onExpand(row)}
          aria-label="Expand row"
        >
          <Icon name={expanded ? 'angle-up' : 'angle-down'} />
        </Button>
      ),
      width: '2rem',
      ...expandableColumn
    });
  }

  return (
    <Table
      style={tableStyle}
      {...props}
    >
      {showColgroup &&
      <colgroup>
        {cols.map(column => (
          <col key={column.key} style={{ width: column.width }} />
            ))}
      </colgroup>
        }
      <thead>
        {header}
        <tr>
          {cols.map(column => (
            <Header
              active={column.active}
              ascending={column.ascending}
              className={generateColumnClassName(column, truncate)}
              key={column.key}
              onSort={column.onSort ? () => column.onSort!(!column.ascending) : undefined}
            >
              {column.header}
            </Header>
            ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => renderRow(row, cols, rowClassName, rowExpanded, rowOnClick, truncate, rowSelected))}
      </tbody>
      {(showFooter || footer) && (
      <tfoot>
        {showFooter && (
        <tr>
          {cols.map(column => (
            <td
              key={column.key}
              className={generateColumnClassName(column, truncate)}
            >
              {column.footer}
            </td>
                ))}
        </tr>
            )}
        {footer}
      </tfoot>
        )}
    </Table>
  );
}
