import * as React from 'react';

interface HasManyFieldsRowProps {
  children: (JSX.Element | string) | (JSX.Element | string)[];
  className?: string;
  onDelete?: React.MouseEventHandler<any>;
  disabled?: boolean;
  disabledReason?: (JSX.Element | string) | (JSX.Element | string)[];
  disabledReasonPlacement?: string;
}
declare class HasManyFieldsRow extends React.Component<HasManyFieldsRowProps, {}> { }
export default HasManyFieldsRow;
