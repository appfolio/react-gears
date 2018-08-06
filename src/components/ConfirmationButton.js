import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import Button from './Button';

class ConfirmationButton extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    confirmation: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick: () => {}
  }

  constructor() {
    super();
    this.state = {
      confirm: false
    };
  }

  onClick = (e) => {
    if (this.state.confirm) {
      this.props.onClick(e);
    }

    this.setState({ confirm: !this.state.confirm });
  }

  enableOnClickOutside() {
    return this.state.confirm;
  }

  handleClickOutside() {
    this.setState({ confirm: false });
  }

  render() {
    const { children, confirmation, onClick,
      // eslint-disable-next-line react/prop-types
      eventTypes, outsideClickIgnoreClass, preventDefault, stopPropagation, disableOnClickOutside, enableOnClickOutside,
      ...props } = this.props;

    return (
      <Button
        onBlur={() => this.handleClickOutside()}
        onClick={this.onClick}
        {...props}
      >
        {this.state.confirm ? confirmation : children}
      </Button>
    );
  }
}

export default onClickOutside(ConfirmationButton);
