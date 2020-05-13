import noop from 'lodash.noop';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import React from 'react';
import Button from './Button';
import ConfirmationButton from './ConfirmationButton';
import Col from './Col';
import Collapse from './Collapse';
import Icon from './Icon';
import Row from './Row';
import Tooltip from './Tooltip';

let count = 0;

function getID() {
  return `hmf-${(count += 1)}`; // eslint-disable-line no-return-assign
}

export default class HasManyFieldsRow extends React.Component {
  static propTypes = {
    animated: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    disabledReason: PropTypes.node,
    disabledReasonPlacement: PropTypes.string,
    onDelete: PropTypes.func,
    deletable: PropTypes.bool,
    tabbingIgnoreDelete: PropTypes.bool
  };

  static defaultProps = {
    animated: true,
    disabledReasonPlacement: 'top',
    disabled: false,
    onDelete: noop,
    deletable: true,
    tabbingIgnoreDelete: false
  };

  state = {
    isOpen: true
  };

  //eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.id = getID();
  }

  componentDidMount() {
    if (this.props.animated) {
      setTimeout(() => {
        this.setState({ isOpen: true });
      });
    }
  }

  closeCollapse = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const {
      animated,
      children,
      className,
      disabledReason,
      onDelete,
      disabled,
      disabledReasonPlacement,
      deletable,
      tabbingIgnoreDelete
    } = this.props;

    const classNames = classnames('mb-4', className);
    // The `disabled ? <Button> : <ConfirmationButton>` code works around Tooltips not show on `disabled` elements:

    const tooltip =
      disabled && disabledReason ? (
        <Tooltip placement={disabledReasonPlacement} target={this.id}>
          {disabledReason}
        </Tooltip>
      ) : null;

    let button;
    if (disabled) {
      button = (
        <Button
          id={this.id}
          color="danger"
          onClick={e => e.preventDefault()}
          outline
          className="p-2 disabled"
          tabIndex={tabbingIgnoreDelete ? -1 : 0}
        >
          <Icon name="times-circle-o" size="lg" />
        </Button>
      );
    } else if (animated) {
      button = (
        <ConfirmationButton
          color="danger"
          confirmation="Delete"
          aria-label="Delete"
          outline
          onClick={this.closeCollapse}
          className="p-2"
          tabIndex={tabbingIgnoreDelete ? -1 : 0}
        >
          <Icon name="times-circle-o" size="lg" />
        </ConfirmationButton>
      );
    } else {
      button = (
        <ConfirmationButton
          color="danger"
          confirmation="Delete"
          aria-label="Delete"
          outline
          onClick={onDelete}
          className="p-2"
          tabIndex={tabbingIgnoreDelete ? -1 : 0}
        >
          <Icon name="times-circle-o" size="lg" />
        </ConfirmationButton>
      );
    }

    return (animated ? (
      <Collapse isOpen={this.state.isOpen} onExited={onDelete}>
        <Row className={classNames} noGutters>
          <Col>{children}</Col>
          {deletable && (
            <Col xs="auto" className="js-delete-col pl-3 d-flex">
              {button}
              {tooltip}
            </Col>
          )}
        </Row>
      </Collapse>
    ) : (
      <Row className={classNames} noGutters>
        <Col>{children}</Col>
        {deletable && (
          <Col xs="auto" className="js-delete-col pl-3 d-flex">
            {button}
            {tooltip}
          </Col>
        )}
      </Row>
    ));
  }
}
