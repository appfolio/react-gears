import React, { FunctionComponent, Fragment } from 'react';
import Button from './Button';
import Tooltip from './Tooltip';
import uniqid from 'uniqid';
import { ButtonProps } from 'reactstrap/lib/Button';


interface TooltipButtonProps extends ButtonProps {
  tooltip?: string;
  tooltipPlacement?: string;
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

  return (
    <Fragment>
      {tooltip && (
        <Tooltip placement={tooltipPlacement} target={id}>
          {tooltip}
        </Tooltip>
      )}
      <span id={id} className={gearsBtnContainerClass}>
        <Button
          disabled={disabled}
          style={disabled ? { pointerEvents: 'none' } : {}} // for tooltip
          {...props}
        >
          {children}
        </Button>
      </span>
    </Fragment>
  );
}

TooltipButton.displayName = 'TooltipButton'


export default TooltipButton;
