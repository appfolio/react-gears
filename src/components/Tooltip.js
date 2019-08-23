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
    fade: false
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
        // This is a workaround for the reactstrap Tooltip memory leak issue.
        // https://github.com/reactstrap/reactstrap/issues/1482
        modifiers={{
          flip: {
              enabled: false,
          },
        }}
      />
    );
  }
}
