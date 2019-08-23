import React from 'react';
import UncontrolledPopover from 'reactstrap/lib/UncontrolledPopover';

export default props => (
  <UncontrolledPopover
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
