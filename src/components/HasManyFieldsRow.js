import noop from 'lodash.noop';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
    className: PropTypes.string,
    disabled: PropTypes.bool,
    disabledReason: PropTypes.node,
    disabledReasonPlacement: PropTypes.string,
    onDelete: PropTypes.func,
    deletable: PropTypes.bool
  };

  static defaultProps = {
    disabledReasonPlacement: 'top',
    disabled: false,
    onDelete: noop,
    deletable: true
  };

  componentWillMount() {
    this.id = getID();
  }

  render() {
    const {
      children,
      className,
      disabledReason,
      onDelete,
      disabled,
      disabledReasonPlacement,
      deletable
    } = this.props;

    const classNames = classnames('mb-3', className);
    // The `disabled ? <Button> : <ConfirmationButton>` code works around Tooltips not show on `disabled` elements:

    const tooltip =
      disabled && disabledReason ? (
        <Tooltip placement={disabledReasonPlacement} target={this.id}>
          {disabledReason}
        </Tooltip>
      ) : null;

    const button = disabled ? (
      <Button
        id={this.id}
        color="danger"
        onClick={e => e.preventDefault()}
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
    );

    return (
      <Row className={classNames} noGutters>
        <Col>{children}</Col>
        <Col xs="auto" className="pl-3 d-flex">
          {deletable ? button : null}
          {tooltip}
        </Col>
      </Row>
    );
  }
}
