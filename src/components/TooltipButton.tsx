import React, { FunctionComponent, Fragment } from 'react';
import Button from './Button';
import Tooltip from './Tooltip';
import uniqid from 'uniqid';
import { ButtonProps } from 'reactstrap/lib/Button';


interface TooltipButtonProps extends ButtonProps {
  text: string;
  tooltip?: string;
  tooltipPlacement?: string;
  gearsBtnContainerClass?: string;
}

const TooltipButton: FunctionComponent<TooltipButtonProps> = ({
  tooltip = '',
  onClick,
  disabled,
  text,
  tooltipPlacement = 'top',
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
          onClick={onClick}
          disabled={disabled}
          style={disabled ? { pointerEvents: 'none' } : {}} // for tooltip
          {...props}
        >
          {text}
        </Button>
      </span>
    </Fragment>
  );
}

TooltipButton.displayName = 'TooltipButton'


export default TooltipButton;
