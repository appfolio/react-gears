
interface BlockPanelProps {
  children?: (string | JSX.Element)[] | string | JSX.Element;
  controls?: JSX.Element | JSX.Element[];
  className?: string;
  color: string;
  expandable?: boolean;
  hideOnToggle?: boolean;
  onEdit?: React.MouseEventHandler<any>;
  onToggle?: (isOpen: boolean) => void;
  open?: boolean;
  title: (string | JSX.Element)[] | string | JSX.Element;
}

declare const BlockPanel: React.StatelessComponent<BlockPanelProps>;
export default BlockPanel;
