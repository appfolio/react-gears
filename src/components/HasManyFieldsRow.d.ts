import * as React from 'react';

interface HasManyFieldsRowProps {
  children: React.ReactNode;
  className?: string;
  onDelete?: React.MouseEventHandler<any>;
  deletable?: boolean;
  disabled?: boolean;
  disabledReason?: React.ReactNode;
  disabledReasonPlacement?: string;
}
declare class HasManyFieldsRow extends React.Component<HasManyFieldsRowProps, {}> { }
export default HasManyFieldsRow;
