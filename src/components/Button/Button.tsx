import React from 'react';
import { Button as RsButton, ButtonProps as RsButtonProps } from 'reactstrap';

export interface ButtonProps extends RsButtonProps {
  ariaLabelledBy?: string;
}

const Button = ({
  ariaLabelledBy = '',
  disabled = false,
  children,
  'aria-label': ariaLabel,
  ...props
}: ButtonProps) => {
  if (!ariaLabel && children && typeof children === 'string') {
    ariaLabel = children;
  }

  return (
    <RsButton
      {...props}
      disabled={disabled}
      role="button"
      aria-disabled={disabled}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy || undefined}
    >
      {children}
    </RsButton>
  );
};

export default Button;
