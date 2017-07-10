import noop from 'lodash.noop';
import React from 'react';
import { Button, Col, Row } from 'reactstrap';

import Icon from './Icon';

const HasManyFieldsRow = ({ children, onDelete, disabled }) => (
  <Row className="mb-3" noGutters>
    <Col children={children} />
    <Col xs="auto" className="pl-3 d-flex">
      <Button
        outline
        color="danger"
        onClick={onDelete}
        disabled={disabled}
        className="rounded-0 p-2"
      >
        <Icon name="trash-o" size="lg" />
      </Button>
    </Col>
  </Row>
);

HasManyFieldsRow.propTypes = {
  children: React.PropTypes.node.isRequired,
  onDelete: React.PropTypes.func,
  disabled: React.PropTypes.bool
};

HasManyFieldsRow.defaultProps = {
  onDelete: noop
};

export default HasManyFieldsRow;
