import React from 'react';
import { Button as RsButton, ButtonProps as RsButtonProps } from 'reactstrap';

export interface ButtonProps extends RsButtonProps {
  'aria-labelledby'?: string;
}

const Button = ({
  disabled = false,
  children,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...props
}: ButtonProps) => {
  if (!ariaLabel && children && typeof children === 'string') {
    ariaLabel = children;
  }

  return (
    <RsButton
      {...props}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy || undefined}
    >
      {children}
    </RsButton>
  );
};

Button.displayName = 'GearsWrapperButton';
export default Button;
