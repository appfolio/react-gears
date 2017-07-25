import React, { Component } from 'react';

export default WrappedComponent => {
  class UncontrolledComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        value: props.defaultValue
      };
    }

    onChange = (...args) => {
      const { onChange } = this.props;
      onChange && onChange(...args);
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
  }

  const { displayName, name } = WrappedComponent;
  const wrappedComponentName = displayName || name || 'UnnamedComponent';

  UncontrolledComponent.displayName = `Uncontrolled${wrappedComponentName}`;

  return UncontrolledComponent;
};
