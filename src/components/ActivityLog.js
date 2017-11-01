import React from 'react';
import ListGroup from './ListGroup.js';

const ActivityLog = ({ children, ...props }) => <ListGroup {...props}>{children}</ListGroup>;

export default ActivityLog;
