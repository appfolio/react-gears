import React, { FC } from 'react';
import { ListGroup, ListGroupProps } from 'reactstrap';

const ActivityLog: FC<ListGroupProps> = ({ children, ...props }) => (
  <ListGroup {...props}>{children}</ListGroup>
);

export default ActivityLog;
