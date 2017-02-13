import React from 'react';
import { Col, Row } from 'reactstrap';

const Datapair = props => (
  <Row className="mb-1">
    <Col sm="4" className="text-sm-right text-muted">{props.label}</Col>
    <Col sm="8">{props.children || props.value}</Col>
  </Row>
);

Datapair.propTypes = {
  children: React.PropTypes.node,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string
};

export default Datapair;
