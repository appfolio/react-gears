import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select-plus';
import classnames from 'classnames';
import Close from './Close';
import Icon from './Icon';
import noop from 'lodash.noop';
import Option from './SelectOption.js';

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

  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.setState({ value: props.value });
    }
  }

  onChange = value => {
    this.setState({ value });
    this.props.onChange(value);
  }

  bindInput = el => this.selectEl = el;

  focus() {
    this.selectEl.focus();
  }

  render() {
    const { className, value, ...props } = this.props;
    delete props.onChange; // don't pass onChange prop to react-select
    const SelectElement = this.props.loadOptions ? ReactSelect.Async : ReactSelect;
    const classNames = classnames(className, {'select-async': this.props.loadOptions});

    return (
      <SelectElement
        arrowRenderer={({ isOpen }) => <Icon name={`caret-${isOpen ? 'up' : 'down'}`} />}
        clearRenderer={() => <Close tabIndex={-1} style={{ fontSize: '1rem' }} />}
        optionComponent={Option}
        inputProps={{ ...props.inputProps, name: props.name || '' }}
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
