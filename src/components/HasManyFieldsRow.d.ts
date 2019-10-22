import * as React from 'react';

interface HasManyFieldsRowProps {
  children: ReactNode;
  className?: string;
  onDelete?: React.MouseEventHandler<any>;
  deletable?: boolean;
  disabled?: boolean;
  disabledReason?: ReactNode;
  disabledReasonPlacement?: string;
}
declare class HasManyFieldsRow extends React.Component<HasManyFieldsRowProps, {}> { }
export default HasManyFieldsRow;
