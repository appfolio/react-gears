import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import Form from './Form';

class BoundForm extends React.Component {
  static propTypes = {
    errors: PropTypes.object,
    object: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    errors: {},
    onSubmit: noop,
    onChange: noop
  };

  static childContextTypes = {
    value: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      formData: props.object
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(e, this.state.formData);
  }

  handleChange = name => (data) => {
    const value = data.target instanceof Element ? data.target.value : data;
    this.setState({ formData: { ...this.state.formData, [name]: value } });
    this.props.onChange(this.state.formData);
  }

  getChildContext() {
    return {
      value: this.state.formData,
      errors: this.props.errors,
      onChange: this.handleChange
    };
  }

  render() {
    const { onSubmit, ...props } = this.props;

    return (
      <Form onSubmit={this.onSubmit} {...props} />
    );
  }
}

export default BoundForm;
