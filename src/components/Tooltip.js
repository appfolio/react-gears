import PropTypes from 'prop-types';
import React from 'react';
import InnerTooltip from 'reactstrap/lib/Tooltip';

export default class Tooltip extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool
  };

  static defaultProps = {
    isOpen: false
  };

  state = {
    isOpen: this.props.isOpen
  };

  toggle = () => this.setState({
    isOpen: !this.state.isOpen
  });

  render() {
    const { isOpen, ...props } = this.props;  // eslint-disable-line no-unused-vars

    return (
      <InnerTooltip isOpen={this.state.isOpen} toggle={this.toggle} {...props} />
    );
  }
}
