import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select-plus';
import classnames from 'classnames';
import noop from 'lodash.noop';
import Close from './Close';
import Icon from './Icon';
import Option from './SelectOption.js';
import SelectMultiValue from './SelectMultiValue.js';

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

  bindInput = el => this.selectEl = el;

  focus() {
    this.selectEl.focus();
  }

  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.setState({ value: props.value });
    }
  }

  render() {
    const { className, multi, value, valueComponent, ...props } = this.props;
    delete props.onChange; // don't pass onChange prop to react-select
    let SelectElement = ReactSelect;
    if (this.props.loadOptions && this.props.creatable) {
      SelectElement = ReactSelect.AsyncCreatable;
    } else if (this.props.loadOptions) {
      SelectElement = ReactSelect.Async;
    } else if (this.props.creatable) {
      SelectElement = ReactSelect.Creatable;
    }
    const classNames = classnames(className, { 'select-async': this.props.loadOptions });
    const valueComponentRenderer = valueComponent ? valueComponent :
                                   multi ? SelectMultiValue :
                                   undefined;
    return (
      <SelectElement
        arrowRenderer={({ isOpen }) => <Icon name={`caret-${isOpen ? 'up' : 'down'}`} />}
        clearRenderer={() => <Close tabIndex={-1} style={{ fontSize: '1rem' }} />}
        optionComponent={Option}
        inputProps={{ ...props.inputProps, name: props.name || '' }}
        multi={multi}
        onChange={this.onChange}
        value={value || this.state.value}
        valueComponent={valueComponentRenderer}
        ref={this.bindInput}
        className={classNames}
        {...props}
      />
    );
  }
}

export default Select;
