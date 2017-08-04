import noop from 'lodash.noop';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Row } from 'reactstrap';

import Icon from './Icon';

const HasManyFieldsRow = ({ children, onDelete, disabled }) => (
  <Row className="mb-3" noGutters>
    <Col children={children} />
    <Col xs="auto" className="pl-3 d-flex">
      <Button
        color="danger"
        onClick={onDelete}
        disabled={disabled}
        className="p-2"
      >
        <Icon name="times-circle-o" size="lg" />
      </Button>
    </Col>
  </Row>
);

HasManyFieldsRow.propTypes = {
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func,
  disabled: PropTypes.bool
};

HasManyFieldsRow.defaultProps = {
  onDelete: noop
};

export default HasManyFieldsRow;
