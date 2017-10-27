import PropTypes from 'prop-types';
import React from 'react';
import Col from './Col';
import Row from './Row';

const Datapair = props => (
  <Row className="mb-1">
    <Col xs={12} sm={4} className="text-sm-right text-muted">{props.label}</Col>
    <Col xs={12} sm={8}>{props.children || props.value}</Col>
  </Row>
);

Datapair.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node.isRequired,
  value: PropTypes.string
};

export default Datapair;
