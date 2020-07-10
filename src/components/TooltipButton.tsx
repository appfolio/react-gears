import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import * as Popper from 'popper.js';
import uniqid from 'uniqid';
import Button from './Button';
import Tooltip from './Tooltip';
import { ButtonProps } from 'reactstrap/lib/Button';

interface TooltipButtonProps extends ButtonProps {
  tooltip?: string;
  tooltipPlacement?: Popper.Placement;
  gearsBtnContainerClass?: string;
}

const TooltipButton: FunctionComponent<TooltipButtonProps> = ({
  tooltip,
  disabled = false,
  text,
  tooltipPlacement = 'top',
  children,
  gearsBtnContainerClass,
  ...props
}) => {
  const idRef = React.useRef(`tooltip-button-${uniqid()}`);
  const id = idRef.current;
  const className = classnames('d-inline-block', gearsBtnContainerClass)

  return (
    <>
      {tooltip && (
        <Tooltip placement={tooltipPlacement} target={id}>
          {tooltip}
        </Tooltip>
      )}
      <div tabIndex={disabled && tooltip ? 0 : -1} id={id} className={className}>
        <Button
          disabled={disabled}
          style={{ pointerEvents: disabled ? 'none' : 'auto' }}
          {...props}
        >
          {children}
        </Button>
      </div>
    </>
  );
};

TooltipButton.displayName = 'TooltipButton';


export default TooltipButton;
