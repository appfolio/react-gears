import type { FunctionComponent } from 'react';
import React from 'react';

const Close: FunctionComponent<React.ComponentPropsWithoutRef<'button'>> = ({
  className = '',
  ...props
}) => <button type="button" className={`btn-close ${className}`} aria-label="Close" {...props} />;

Close.displayName = 'Close';

export default Close;
