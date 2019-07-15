import noop from 'lodash.noop';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';
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
    deletable: PropTypes.bool
  };

  static defaultProps = {
    animated: false,
    disabledReasonPlacement: 'top',
    disabled: false,
    onDelete: noop,
    deletable: true
  };

  state = { isVisible: true };

  onDelete = () => {
    if (this.props.animated) {
      this.setState({ isVisible: false });
      console.log('animating out');
      console.log('deleting: ', this.state.isVisible);
      setTimeout(() => this.props.onDelete(), 500);
    } else {
      this.props.onDelete();
    }
  }

  componentWillMount() {
    this.id = getID();
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
        onClick={animated ? this.onDelete : onDelete}
        className="p-2"
      >
        <Icon name="times-circle-o" size="lg" />
      </ConfirmationButton>
    );

    console.log(button);
    console.log(this.isVisible);
    console.log(this.state.isVisible);

    if (animated) {
      return (
        <Animated animationIn="fadeInDown" animationOut="fadeOutUp" isVisible={this.state.isVisible}>
          <Row className={classNames} noGutters>
            <Col>{children}</Col>
            <Col xs="auto" className="pl-3 d-flex">
              {deletable ? button : null}
              {tooltip}
            </Col>
          </Row>
        </Animated>
      );
    }

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
