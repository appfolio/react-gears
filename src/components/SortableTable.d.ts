import * as React from 'react';
import { TableProps } from './Table';
import { HeaderProps } from './SortableTable/Header';
import Omit from './TypeHelpers/Omit';

type HorizontalAlignment = 'left' | 'center' | 'right';

export interface SortableColumn<T>
  extends Omit<HeaderProps, 'className' | 'children' | 'onSort'> {
  align?: HorizontalAlignment;
  cell: (row: T) => React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  key: string;
  onSort?: (ascending: boolean) => void;
  width?: string;
}

interface SortableTableProps<T> extends TableProps {
  columns: SortableColumn<T>[];
  rows: T[];
  footer?: React.ReactNode;
  rowClassName?: (row: T) => React.ReactNode | undefined;
  rowExpanded?: (row: T) => React.ReactNode | boolean;
  rowOnClick?: (row: T, evt: React.MouseEvent) => void;
  trunate?: boolean;
}

declare class SortableTable<T> extends React.Component<
  SortableTableProps<T>,
  {}
> {}
export default SortableTable;
