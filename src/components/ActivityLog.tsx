import React, { FunctionComponent, ReactNode } from 'react';
import ListGroup from './ListGroup.js';

const ActivityLog: FunctionComponent<ListGroup> = ({ children, ...props }) => (
  <ListGroup {...props}>{children}</ListGroup>
);

export default ActivityLog;
