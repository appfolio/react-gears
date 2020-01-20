import * as React from 'react';
interface BlockPanelProps {
  children?: React.ReactNode;
  controls?: React.ReactNode;
  className?: string;
  color?: string;
  expandable?: boolean;
  hideOnToggle?: boolean;
  onEdit?: React.MouseEventHandler<any>;
  onToggle?: (isOpen: boolean) => void;
  open?: boolean;
  title: React.ReactNode;
}

declare class BlockPanel extends React.Component<BlockPanelProps, {}> { }
export default BlockPanel;

