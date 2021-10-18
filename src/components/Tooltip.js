import PropTypes from 'prop-types';
import React from 'react';
import InnerTooltip from 'reactstrap/lib/Tooltip';

export default class Tooltip extends React.Component {
  static propTypes = {
    ...InnerTooltip.propTypes,
    isOpen: PropTypes.bool
  };

  static defaultProps = {
    ...InnerTooltip.defaultProps,
    isOpen: false,
    fade: false,
  };

  state = {
    isOpen: this.props.isOpen
  };

  toggle = () => this.setState({
    isOpen: !this.state.isOpen
  });

  render() {
    const { isOpen, ...props } = this.props; // eslint-disable-line no-unused-vars

    return (
      <InnerTooltip
        isOpen={this.state.isOpen}
        toggle={this.toggle}
        {...props}
      />
    );
  }
}
