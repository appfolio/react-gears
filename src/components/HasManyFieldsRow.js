import React from 'react';
import noop from 'lodash/noop';
import { Row, Col, Button } from 'reactstrap';
import Icon from './Icon';

const HasManyFieldsRow = ({ children, onDelete }) => (
  <Row className="mb-3" noGutters>
    <Col children={children} />
    <Col xs="auto" className="pl-3">
      <Button outline color="danger" onClick={onDelete} className="h-100 rounded-0 p-2">
        <Icon name="trash-o" size="lg"/>
      </Button>
    </Col>
  </Row>
);

HasManyFieldsRow.propTypes = {
  onDelete: React.PropTypes.func
};

HasManyFieldsRow.defaultProps = {
  onDelete: noop
}

export default HasManyFieldsRow;
