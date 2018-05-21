import * as React from 'react';

export interface TableProps {
  size?: string;
  bordered?: boolean;
  striped?: boolean;
  inverse?: boolean;
  hover?: boolean;
  reflow?: boolean;
  responsive?: boolean;
}
declare class Table extends React.Component<TableProps, {}> { }
export default Table;

