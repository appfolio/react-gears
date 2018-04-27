import * as React from 'react';

interface HasManyFieldsRowProps {
  children: (JSX.Element | string) | (JSX.Element | string)[];
  onDelete?: React.MouseEventHandler<any>;
  disabled?: boolean;
}
declare class HasManyFieldsRow extends React.Component<HasManyFieldsRowProps, {}> { }
export default HasManyFieldsRow;
