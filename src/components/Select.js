import React, { Component } from 'react';
import Select from 'react-select';

// Disables CSS modules to import as global:
import './Select.scss';

class Select2 extends Component {
  static propTypes = {
    defaultValue: React.PropTypes.any,
    value: React.PropTypes.any
  };

  static defaultProps = {
    defaultValue: ''
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue
    }
  }

  updateValue = value => { this.setState({ value }); }

  render() {
    const { value, ...props } = this.props;
    const SelectElement = this.props.loadOptions ? Select.Async : Select;

    return (
      <SelectElement
        onChange={this.updateValue}
        value={value || this.state.value}
        {...props}
      />
    );
  }
}

export default Select2;
