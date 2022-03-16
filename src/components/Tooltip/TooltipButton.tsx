import type { Placement } from '@popperjs/core';
import classnames from 'classnames';
import type { FunctionComponent } from 'react';
import React from 'react';
import uniqid from 'uniqid';
import Button from '../Button/Button';
import type { ButtonProps } from '../Button/Button';
import Tooltip from './Tooltip';

interface TooltipButtonProps extends ButtonProps {
  tooltip?: React.ReactNode;
  tooltipPlacement?: Placement;
  gearsBtnContainerClass?: string;
}

const TooltipButton: FunctionComponent<TooltipButtonProps> = ({
  tooltip,
  disabled = false,
  tooltipPlacement = 'top',
  children,
  gearsBtnContainerClass,
  ...props
}) => {
  const buttonIdRef = React.useRef(`tooltip-button-${uniqid()}`);
  const buttonId = buttonIdRef.current;
  const tooltipId = `tooltip-for-${buttonId}`;
  const className = classnames('d-inline-block', gearsBtnContainerClass);

  return (
    <>
      {tooltip && (
        <Tooltip id={tooltipId} placement={tooltipPlacement} target={buttonId}>
          {tooltip}
        </Tooltip>
      )}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <div tabIndex={disabled && tooltip ? 0 : -1} id={buttonId} className={className}>
        <Button
          aria-describedby={tooltipId}
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
