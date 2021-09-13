import React, { FunctionComponent } from 'react';

const Close: FunctionComponent<React.ComponentPropsWithoutRef<'button'>> = ({ className = '', ...props }) => (
  <button type="button" className={`btn-close ${className}`} aria-label="Close" {...props} />
);

Close.displayName = 'Close';

export default Close;
