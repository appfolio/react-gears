import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select-plus';
import noop from 'lodash.noop';
import uniq from 'lodash.uniq';
import Close from './Close';
import Icon from './Icon';
import SelectMultiValue from './SelectMultiValue.js';

// Disables CSS modules to import as global:
import './Select.scss';

class SelectEmail extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.any,
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

  bindInput = el => this.selectEl = el;

  focus() {
    this.selectEl.focus();
  }

  onPaste = (evt) => {
    evt.preventDefault();
    const clipboard = evt.clipboardData.getData('Text');
    if (!clipboard) {
      return;
    }
    const values = uniq(clipboard.split(/[\s,]+/), value =>
      value.trim());
    const options = values
      .filter(value =>
        this.selectEl.props.isValidNewOption({ label: value }))
      .map((value) => {
        return {
          [this.selectEl.labelKey]: value,
          [this.selectEl.valueKey]: value,
          className: 'Select-create-option-placeholder'
        };
      });
    this.selectEl.select.selectValue(options);
  }

  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.setState({ value: props.value });
    }
  }

  render() {
    const { className, multi, value, valueComponent, ...props } = this.props;
    delete props.onChange; // don't pass onChange prop to react-select
    return (
      <ReactSelect.Creatable
        arrowRenderer={({ isOpen }) => <Icon name={`caret-${isOpen ? 'up' : 'down'}`} />}
        clearRenderer={() => <Close tabIndex={-1} style={{ fontSize: '1rem' }} />}
        inputProps={{ ...props.inputProps, name: props.name || '', onPaste: this.onPaste }}
        multi
        onChange={this.onChange}
        value={value || this.state.value}
        valueComponent={SelectMultiValue}
        className={className}
        ref={this.bindInput}
        {...props}
      />
    );
  }
}

export default SelectEmail;
