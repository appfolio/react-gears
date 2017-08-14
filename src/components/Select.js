import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select-plus';
import { Close, Icon } from '../';
import noop from 'lodash.noop';
import Option from './SelectOption.js';
import asUncontrolled from '../asUncontrolled';

// Disables CSS modules to import as global:
import './Select.scss';

class Select extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.any,
    loadOptions: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.any,
    ...ReactSelect.propTypes
  };

  static defaultProps = {
    onChange: noop
  };

  render() {
    const { inputProps, loadOptions, name } = this.props;
    const SelectElement = loadOptions ? ReactSelect.Async : ReactSelect;

    return (
      <SelectElement
        arrowRenderer={({ isOpen }) => <Icon name={`caret-${isOpen ? 'up' : 'down'}`} />}
        clearRenderer={() => <Close style={{ fontSize: '1rem' }} />}
        optionComponent={Option}
        inputProps={{ ...inputProps, name: name || '' }}
        {...this.props}
      />
    );
  }
}

export default asUncontrolled(Select);
