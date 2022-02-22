import React, { ComponentPropsWithoutRef, FunctionComponent } from 'react';

const Close: FunctionComponent<ComponentPropsWithoutRef<'button'>> = ({
  className = '',
  ...props
}) => (
  <button type="button" className={`close ${className}`} aria-label="Close" {...props}>
    <span aria-hidden="true">&times;</span>
  </button>
);

Close.displayName = 'Close';

export default Close;
