import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select-plus';
import classnames from 'classnames';
import noop from 'lodash.noop';
import Close from './Close';
import Option from './SelectOption.js';
import SelectArrow from './SelectArrow';
import SelectMultiValue from './SelectMultiValue.js';

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
    const { arrowRenderer, className, inputProps, multi, name, value, valueComponent, ...props } = this.props;
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
    const valueComponentRenderer = valueComponent || (multi ? SelectMultiValue : undefined);

    return (
      <SelectElement
        arrowRenderer={({ isOpen }) => <SelectArrow isOpen={isOpen} render={arrowRenderer} />}
        clearRenderer={() => <Close tabIndex={-1} style={{ fontSize: '1rem' }} />}
        optionComponent={Option}
        inputProps={{ name, ...inputProps }}
        multi={multi}
        onChange={this.onChange}
        value={value || this.state.value}
        valueComponent={valueComponentRenderer}
        ref={this.bindInput}
        className={classNames}
        name={name}
        {...props}
      />
    );
  }
}

export default Select;
