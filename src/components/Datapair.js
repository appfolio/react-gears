import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';

const Datapair = props => (
  <Row className="mb-1">
    <Col xs={12} sm={4} className="text-sm-right text-muted">{props.label}</Col>
    <Col xs={12} sm={8}>{props.children || props.value}</Col>
  </Row>
);

Datapair.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default Datapair;
