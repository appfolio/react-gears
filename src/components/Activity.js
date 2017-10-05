import PropTypes from 'prop-types';
import React from 'react';
import fecha from 'fecha';
import Row from './Row';
import Col from './Col';

const TIME_FORMAT = 'MM/DD/YYYY hh:mm A';

const Activity = props => (
  <li>
    <Row className="px-3 py-2">
      <Col xs="6" sm="5" md="3">{fecha.format(props.createdAt, TIME_FORMAT)}</Col>
      <Col xs="6" sm="7" md="9" className="pl-0">
        <span className="font-weight-bold">{props.action}</span>{props.createdBy && <span className="font-italic"> by {props.createdBy}</span>}
        <br />
        <span className="test-activity_children" style={{ fontSize: '1.0rem' }}>{props.children}</span>
      </Col>
    </Row>
  </li>
);

Activity.propTypes = {
  children: PropTypes.node,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  action: PropTypes.string.isRequired,
  createdBy: PropTypes.string
};

export default Activity;
