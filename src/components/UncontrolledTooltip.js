import React from 'react';
import UncontrolledTooltip from 'reactstrap/lib/UncontrolledTooltip';

export default props => (
  <UncontrolledTooltip
    {...props}
    // This is a workaround for the reactstrap Tooltip memory leak issue.
    // https://github.com/reactstrap/reactstrap/issues/1482
    modifiers={{
      flip: {
          enabled: false,
      },
    }}
  />
);
