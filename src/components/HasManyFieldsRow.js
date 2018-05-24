import noop from 'lodash.noop';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import ConfirmationButton from './ConfirmationButton';
import Col from './Col';
import Icon from './Icon';
import Row from './Row';
import Tooltip from './Tooltip';

let count = 0;

function getID() {
  return `hmf-${(count += 1)}`;
}

export default class HasManyFieldsRow extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    disabledReason: PropTypes.node,
    disabledReasonPlacement: PropTypes.string,
    onDelete: PropTypes.func
  };

  static defaultProps = {
    disabledReasonPlacement: 'top',
    disabled: false,
    onDelete: noop
  };

  componentWillMount() {
    this.id = getID();
  }

  render() {
    const {
      children,
      disabledReason,
      onDelete,
      disabled,
      disabledReasonPlacement
    } = this.props;

    // The `disabled ? <Button> : <ConfirmationButton>` code works around Tooltips not show on `disabled` elements:
    return (
      <Row className="mb-3" noGutters>
        <Col>{children}</Col>
        <Col xs="auto" className="pl-3 d-flex">
          {disabled ? (
            <Button
              id={this.id}
              color="danger"
              outline
              className="p-2 disabled"
            >
              <Icon name="times-circle-o" size="lg" />
            </Button>
          ) : (
            <ConfirmationButton
              color="danger"
              confirmation="Delete"
              outline
              onClick={onDelete}
              className="p-2"
            >
              <Icon name="times-circle-o" size="lg" />
            </ConfirmationButton>
          )}
          {disabled &&
            disabledReason && (
              <Tooltip placement={disabledReasonPlacement} target={this.id}>
                {disabledReason}
              </Tooltip>
            )}
        </Col>
      </Row>
    );
  }
}
