import React from 'react';

type CalculateInputState = {
  value: string
}

class CalculateInput extends React.Component<{}, CalculateInputState> {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.key === '=') {
      this.calculateResult();
    }
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const regex = /^[\d\s+\-*/().]*$/;
    if (regex.test(event.target.value)) {
      this.setState({ value: event.target.value });
    }
  }

  handleBlur() {
    this.calculateResult();
  }

  calculateResult() {
    const result = eval(this.state.value);
    this.setState({ value: result });
  }

  render() {
    return (
      <input
        value={this.state.value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

export default CalculateInput;
