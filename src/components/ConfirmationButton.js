import React from 'react';
import onClickOutside from 'react-onclickoutside';
import Button from './Button';

class ConfirmationButton extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    confirmation: React.PropTypes.string,
    onClick: React.PropTypes.func
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

  enableOnClickOutside(evt) {
    return this.state.confirm;
  }

  handleClickOutside(evt) {
    this.setState({ confirm: false });
  }

  render() {
    const { children, confirmation, onClick,
      // eslint-disable-next-line react/prop-types
      eventTypes, outsideClickIgnoreClass, preventDefault, stopPropagation, disableOnClickOutside, enableOnClickOutside,
      ...props } = this.props;

    return (
      <Button
        onClick={e => this.onClick(e)}
        {...props}
      >
        {this.state.confirm ? confirmation : children}
      </Button>
    );
  }
}

export default onClickOutside(ConfirmationButton);
