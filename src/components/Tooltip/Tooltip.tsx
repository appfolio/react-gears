import React, { useCallback, useState, type FC } from 'react';
import { type TooltipProps as InnerTooltipProps, Tooltip as InnerTooltip } from 'reactstrap';

export interface TooltipProps extends Omit<InnerTooltipProps, 'toggle'> {}

const defaultProps = { isOpen: false, fade: false };

const Tooltip: FC<TooltipProps> = ({
  isOpen = defaultProps.isOpen,
  fade = defaultProps.fade,
  target,
  ...props
}) => {
  const [open, setOpen] = useState(isOpen);

  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <InnerTooltip isOpen={open} toggle={handleToggle} fade={fade} target={target} {...props} />
  );
};

export default Tooltip;
