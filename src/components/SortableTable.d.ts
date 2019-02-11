import * as React from 'react';
import { TableProps } from './Table';
import { HeaderProps } from './SortableTable/Header';
import Omit from './TypeHelpers/Omit';

type Node = JSX.Element | string;
type HorizontalAlignment = 'left' | 'center' | 'right';

export interface SortableColumn<T>
  extends Omit<HeaderProps, 'className' | 'children' | 'onSort'> {
  align?: HorizontalAlignment;
  cell: (row: T) => Node;
  footer?: Node;
  header?: Node;
  key: string;
  onSort?: (ascending: boolean) => void;
  width?: string;
}

interface SortableTableProps<T> extends TableProps {
  columns: SortableColumn<T>[];
  rows: T[];
  footer?: Node;
  rowClassName?: (row: T) => Node | undefined;
  rowExpanded?: (row: T) => Node | boolean;
  rowOnClick?: (row: T, evt: React.MouseEvent) => void;
  trunate?: boolean;
}

declare class SortableTable<T> extends React.Component<
  SortableTableProps<T>,
  {}
> {}
export default SortableTable;
