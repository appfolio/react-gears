import React from 'react';
import { Button as RsButton } from 'reactstrap';

const Button = ({ disabled = false, block = false, outline = false, ...props }) => (
  <RsButton
    {...props}
    disabled={disabled}
    block={block}
    outline={outline}
    role="button"
    aria-disabled={disabled}
    aria-labelledby={typeof props.children === 'string' ? props.children : undefined}
  />
);

export type { ButtonProps } from 'reactstrap';

export default Button;
