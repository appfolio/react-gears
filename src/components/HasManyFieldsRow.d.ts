interface HasManyFieldsRowPropTypes {
  children: (JSX.Element | string) | (JSX.Element | string)[];
  onDelete?: React.MouseEventHandler<any>;
  disabled?: boolean;
}
declare const HasManyFieldsRow: React.StatelessComponent<HasManyFieldsRowPropTypes>;
export default HasManyFieldsRow;
