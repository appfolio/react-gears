import React, { Component } from 'react';
import ReactSelect from 'react-select';
import noop from 'lodash.noop';

// Disables CSS modules to import as global:
import './Select.scss';

class Select extends Component {
  static propTypes = {
    defaultValue: React.PropTypes.any,
    loadOptions: React.PropTypes.func,
    onChange: React.PropTypes.func,
    value: React.PropTypes.any,
  };

  static defaultProps = {
    onChange: noop,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue
    };
  }
  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.setState({ value: props.value });
    }
  }

  onChange = value => {
    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
    const { value, ...props } = this.props;
    delete props.onChange; // don't pass onChange prop to react-select
    const SelectElement = this.props.loadOptions ? ReactSelect.Async : ReactSelect;

    return (
      <SelectElement
        inputProps={{ ...props.inputProps, name: props.name || '' }}
        onChange={this.onChange}
        value={value || this.state.value}
        {...props}
      />
    );
  }
}

export default Select;
