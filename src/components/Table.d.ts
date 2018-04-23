export interface TablePropTypes {
  size?: string;
  bordered?: boolean;
  striped?: boolean;
  inverse?: boolean;
  hover?: boolean;
  reflow?: boolean;
  responsive?: boolean;
}
declare const Table: React.StatelessComponent<TablePropTypes>;
export default Table;
