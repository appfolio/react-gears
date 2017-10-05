import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from './Card.js';
import style from './ActivityLog.scss';

const classNames = classnames([
  style.activitylog,
  'p-2',
  'm-0'
]);

const ActivityLog = props => (
  <Card outline color="secondary" className="rounded-0 mb-2">
    <ul className={classNames}>
      {props.children}
    </ul>
  </Card>
);

ActivityLog.propTypes = {
  children: PropTypes.node,
};

export default ActivityLog;
