import React, { FC } from 'react';

const Close: FC<React.ComponentPropsWithoutRef<'button'>> = ({ className = '', ...props }) => (
  <button type="button" className={`btn-close ${className}`} aria-label="Close" {...props} />
);

Close.displayName = 'Close';

export default Close;
