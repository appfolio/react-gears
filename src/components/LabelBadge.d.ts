interface LabelBadgePropTypes {
  className?: string;
  label: string;
  maxWidth: number;
  onRemove?: React.MouseEventHandler<any>;
  removable?: boolean;
  value: string;
}
declare const LabelBadge: React.StatelessComponent<LabelBadgePropTypes>;
export default LabelBadge;
