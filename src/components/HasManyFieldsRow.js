import noop from 'lodash.noop';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './ConfirmationButton';
import Col from './Col';
import Icon from './Icon';
import Row from './Row';
import Tooltip from './Tooltip';

let count = 0;

function getID() {
  return `hmf-${count += 1}`;
}

export default class HasManyFieldsRow extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    disabledReason: PropTypes.node,
    onDelete: PropTypes.func
  };

  static defaultProps = {
    disabled: false,
    onDelete: noop
  };

  componentWillMount() {
    this.id = getID();
  }

  render() {
    const { children, disabledReason, onDelete, disabled } = this.props;

    return (
      <Row className="mb-3" noGutters>
        <Col>{children}</Col>
        <Col xs="auto" className="pl-3 d-flex">
          <Button
            color="danger"
            confirmation="Delete"
            id={this.id}
            outline
            onClick={onDelete}
            disabled={disabled}
            className="p-2"
          >
            <Icon name="times-circle-o" size="lg" />
          </Button>
          {(disabled && disabledReason) && (
            <Tooltip
              placement="top"
              target={this.id}
            >
              {disabledReason}
            </Tooltip>
          )}
        </Col>
      </Row>
    );
  }
}
