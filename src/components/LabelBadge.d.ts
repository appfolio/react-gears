import * as React from 'react';

interface LabelBadgeProps {
  className?: string;
  label?: string;
  maxWidth?: number;
  onRemove?: React.MouseEventHandler<any>;
  removable?: boolean;
  value: React.ReactNode;
}
declare class LabelBadge extends React.Component<LabelBadgeProps, {}> { }
export default LabelBadge;
