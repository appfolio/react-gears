import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Input } from 'reactstrap';

export default class PatternInput extends Component {
  constructor(props) {
    super(props);
    const isValid = props.pattern.exec(props.value || '') !== null;

    if (isValid) {
      this.lastValidValue = props.value;
    } else {
      this.lastValidValue = '';
    }
  }

  handleChange = (event) => {
    const { value } = event.target;
    const { pattern, restrictInput } = this.props;
    const isValid = pattern.exec(value) !== null;

    if (!isValid && restrictInput) {
      this.input.value = this.lastValidValue || '';
    } else {
      if (isValid) this.lastValidValue = value;

      this.props.onChange(event, { value, isValid });
    }
  }

  render() {
    const { pattern, restrictInput, ...inputProps } = this.props;
    return (
      <Input
        {...inputProps} ref={self => { this.input = self; }}
        onKeyPress={!!restrictInput && this.handleKeyPress}
        onChange={this.handleChange} pattern={pattern}
      />
    );
  }
}

PatternInput.defaultProps = {
  pattern: /.*/g,
  restrictInput: true,
  value: '',

  onChange: () => {},
};
PatternInput.propTypes = {
  pattern: (props, propName) => (
    props[propName] instanceof RegExp ? null : new Error('Pattern must be a valid RegExp')
  ),
  restrictInput: PropTypes.bool,
  value: PropTypes.string,

  onChange: PropTypes.func,
};
