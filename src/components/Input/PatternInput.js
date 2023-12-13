import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';

export default class PatternInput extends React.Component {
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
      if (isValid) {
        this.lastValidValue = value;
      }

      this.props.onChange(event, { value, isValid });
    }
  };

  render() {
    /* eslint-disable-next-line  @typescript-eslint/no-unused-vars -- This should go away when converting to function component  */
    const { pattern, restrictInput, ...inputProps } = this.props;

    if (inputProps && !inputProps['data-testid']) {
      inputProps['data-testid'] = 'react-gears-patterninput-input';
    }

    return (
      <Input
        {...inputProps}
        ref={(self) => {
          this.input = self;
        }}
        onChange={this.handleChange}
        pattern={pattern?.source}
      />
    );
  }
}

PatternInput.defaultProps = {
  pattern: /.*/g,
  restrictInput: true,
  value: '',
};

PatternInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  pattern: (props, propName) =>
    props[propName] instanceof RegExp ? null : new Error('Pattern must be a valid RegExp'),
  restrictInput: PropTypes.bool,
  value: PropTypes.string,
};
