import React, { Component } from 'react';

export default WrappedComponent =>
  class UncontrolledComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        value: props.defaultValue || ''
      };
    }

    onChange = (...args) => {
      this.props.onChange(...args);
      this.setState({
        value: args[0]
      });
    };

    render() {
      return (
        <WrappedComponent
          value={this.state.value}
          {...this.props}
          onChange={this.onChange}
        />
      );
    }
  };
