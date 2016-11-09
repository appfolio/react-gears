import React, { Component } from 'react';
import Select from 'react-select';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

// Disables CSS modules to import as global:
import './Select.scss';

@observer
class Select2 extends Component {

  // TODO specifying value prop makes selection impossible:
  @observable value = this.props.value;
  updateValue = value => this.value = value;

  render() {
    return (
      <Select
        onChange={this.updateValue}
        value={this.value}
        {...this.props}
      />
    );
  }
}

export default Select2;
