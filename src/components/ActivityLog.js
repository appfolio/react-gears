import React from 'react';
import ListGroup from './ListGroup.js';

const ActivityLog = ({ children, ...props }) => (
  <ListGroup {...props}>{children}</ListGroup>
);

ActivityLog.propTypes = {
  ...ListGroup.propTypes,
};

ActivityLog.defaultProps = {
  ...ListGroup.defaultProps,
};

export default ActivityLog;
