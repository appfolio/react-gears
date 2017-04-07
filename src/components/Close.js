import React from 'react';

const Close = props => (
  <button type="button" className="close" aria-label="Close" {...props}>
    <span aria-hidden="true">&times;</span>
  </button>
);

export default Close;
