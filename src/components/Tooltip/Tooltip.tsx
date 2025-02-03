import React, { useCallback, useState, FC } from 'react';
import { TooltipProps as InnerTooltipProps, Tooltip as InnerTooltip } from 'reactstrap';

export interface TooltipProps extends Omit<InnerTooltipProps, 'toggle'> {}

const defaultProps = { isOpen: false, fade: false };

const Tooltip: FC<TooltipProps> = ({
  isOpen = defaultProps.isOpen,
  fade = defaultProps.fade,
  target,
  placement = 'top',
  ...props
}) => {
  const [open, setOpen] = useState(isOpen);

  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  //adds offset for the popper placement base on placement prop
  const offsets: Record<string, [number, number]> = {
    top: [0, 5],
    bottom: [0, 5],
    left: [0, 8],
    right: [0, 8],
  };

  const offset = offsets[placement];

  return (
    <InnerTooltip
      isOpen={open}
      toggle={handleToggle}
      fade={fade}
      target={target}
      placement={placement}
      offset={offset}
      {...props}
    />
  );
};

export default Tooltip;
