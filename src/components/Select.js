import PropTypes from 'prop-types';
import React from 'react';
import { default as ReactSelect } from 'react-select';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import CreatableSelect from 'react-select/creatable';
import classnames from 'classnames';
import noop from 'lodash.noop';

// Disables CSS modules to import as global:
import './Select.scss';

class Select extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.any,
    loadOptions: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.any,
    ...ReactSelect.propTypes
  };

  static defaultProps = {
    onChange: noop
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue
    };
  }

  onChange = (value) => {
    this.setState({ value });
    this.props.onChange(value);
  }

  bindInput = (el) => { this.selectEl = el; };

  focus() {
    this.selectEl.focus();
  }

  //eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.setState({ value: props.value });
    }
  }

  render() {
    const { className, isMulti, value, ...props } = this.props;
    delete props.onChange; // don't pass onChange prop to react-select
    let SelectElement = ReactSelect;
    if (this.props.loadOptions && this.props.creatable) {
      SelectElement = AsyncCreatableSelect;
    } else if (this.props.loadOptions) {
      SelectElement = AsyncSelect;
    } else if (this.props.creatable) {
      SelectElement = CreatableSelect;
    }
    const classNames = classnames(className, { 'select-async': this.props.loadOptions });
    return (
      <SelectElement
        isMulti={isMulti}
        onChange={this.onChange}
        value={value || this.state.value}
        ref={this.bindInput}
        className={classNames}
        {...props}
      />
    );
  }
}

export default Select;
