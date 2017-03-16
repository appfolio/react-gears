import React from 'react';
import { Tooltip as InnerTooltip } from 'reactstrap';

export default class Tooltip extends React.Component {
  static propTypes = {
    isOpen: React.PropTypes.bool
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
