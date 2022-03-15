import type { FC } from 'react';
import React from 'react';
import type { ListGroupProps } from 'reactstrap';
import { ListGroup } from 'reactstrap';

/**
 * Extension to Bootstrap [ListGroup](https://getbootstrap.com/docs/4.3/components/list-group/)
 * for listing a timeline of Activities
 */
const ActivityLog: FC<ListGroupProps> = ({ children, ...props }) => (
  <ListGroup {...props}>{children}</ListGroup>
);

ActivityLog.displayName = 'ActivityLog';

export default ActivityLog;
