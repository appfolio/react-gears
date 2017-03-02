import React, { Component } from 'react';
import ReactSelect from 'react-select';
import noop from 'lodash.noop';
import over from 'lodash.over';

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
    defaultValue: '',
    onChange: noop
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue
    };
  }

  updateValue = value => { this.setState({ value }); }

  render() {
    const { value, onChange, ...props } = this.props;
    const SelectElement = this.props.loadOptions ? ReactSelect.Async : ReactSelect;

    return (
      <SelectElement
        onChange={over([this.updateValue, onChange])}
        value={value || this.state.value}
        {...props}
      />
    );
  }
}

export default Select;
