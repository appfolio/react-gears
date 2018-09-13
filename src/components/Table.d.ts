import * as React from 'react';

export interface TableProps {
  size?: string;
  bordered?: boolean;
  borderless?: boolean;
  striped?: boolean;
  dark?: boolean;
  hover?: boolean;
  responsive?: boolean;
}
declare class Table extends React.Component<TableProps, {}> { }
export default Table;

