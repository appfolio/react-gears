import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import * as Popper from 'popper.js';
import Button from './Button';
import Tooltip from './Tooltip';
import uniqid from 'uniqid';
import { ButtonProps } from 'reactstrap/lib/Button';

interface TooltipButtonProps extends ButtonProps {
  tooltip?: string;
  tooltipPlacement?: Popper.Placement;
  gearsBtnContainerClass?: string;
}

const TooltipButton: FunctionComponent<TooltipButtonProps> = ({
  tooltip = '',
  disabled = false,
  text,
  tooltipPlacement = 'top',
  children,
  gearsBtnContainerClass,
  ...props
}) => {
  const id = `tooltip-button-${uniqid()}`;
  const className = classnames('d-inline-block', gearsBtnContainerClass)

  return (
    <>
      {tooltip && (
        <Tooltip placement={tooltipPlacement} target={id}>
          {tooltip}
        </Tooltip>
      )}
      <div id={id} className={className}>
        <Button
          disabled={disabled}
          style={{ pointerEvents: tooltip ? 'none' : 'auto' }}
          {...props}
        >
          {children}
        </Button>
      </div>
    </>
  );
}

TooltipButton.displayName = 'TooltipButton'


export default TooltipButton;
