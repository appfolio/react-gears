import React, { Component, PropTypes } from 'react';
import { Input } from 'reactstrap';
import autoBind from 'react-autobind';

export default class PatternInput extends Component {
  constructor(props) {
    super(props);
    autoBind(this);

    if (!!props.pattern.exec(props.value || '')) {
      this.lastValidValue = props.value;
    } else {
      this.lastValidValue = '';
    }
  }

  handleChange(event) {
    const { value } = event.target;
    const { pattern, restrictInput } = this.props;
    const isValid = !!pattern.exec(value);

    if (!isValid && restrictInput) {
      this.input.value = this.lastValidValue || '';
    } else {
      if (isValid) this.lastValidValue = value;

      this.props.onChange({ value, isValid });
    }
  }
  handleKeyPress(event) {
    if (!this.props.restrictInput) return;
    if (!this.props.pattern.exec(String.fromCharCode(event.charCode))) {
      event.preventDefault();
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
