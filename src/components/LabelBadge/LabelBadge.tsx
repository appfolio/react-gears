import React, { FC } from 'react';
import Close from '../Button/Close';

type LabelBadgeProps = {
  className?: string;
  label?: string;
  maxWidth?: number;
  onRemove?: React.MouseEventHandler<any>;
  removable?: boolean;
  value: React.ReactNode;
};

const defaultProps = {
  className: '',
  removable: true,
  maxWidth: 14,
};

const LabelBadge: FC<LabelBadgeProps> = ({
  className = defaultProps.className,
  label,
  maxWidth = defaultProps.maxWidth,
  onRemove,
  removable = defaultProps.removable,
  value,
}) => {
  const labelClasses =
    'bg-light text-muted rounded-start d-inline-flex align-self-center h-100 px-3 py-2';
  const valueClasses = 'label-badge-value text-truncate rounded-end px-3 py-2';
  const style = { maxWidth: maxWidth ? `${maxWidth}rem` : '' };

  return (
    <span
      className={`border rounded d-inline-flex flex-row justify-content-between align-items-center ${className}`}
    >
      {label && (
        <strong className={labelClasses} style={style}>
          <span className="text-truncate">{label}</span>
        </strong>
      )}
      <span className={valueClasses} style={style}>
        {value}
      </span>
      {removable && <Close className="me-2" onClick={onRemove} />}
    </span>
  );
};

export default LabelBadge;
