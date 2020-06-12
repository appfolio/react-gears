import React, { FunctionComponent } from 'react';

type CloseProps = {
  className: string
}

const Close: FunctionComponent<CloseProps> = ({ className = '', ...props }) => (
  <button type="button" className={`close ${className}`} aria-label="Close" {...props}>
    <span aria-hidden="true">&times;</span>
  </button>
);

export default Close;
