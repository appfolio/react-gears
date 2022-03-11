import noop from 'lodash.noop';
import PropTypes from 'prop-types';
import React from 'react';

import Form from './Form';

class BoundForm extends React.Component {
  static propTypes = {
    errors: PropTypes.object,
    object: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    errors: {},
    onSubmit: noop,
    onChange: noop,
  };

  static childContextTypes = {
    value: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      formData: props.object,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(e, this.state.formData);
  };

  handleChange = (name) => (data) => {
    const value = data.target instanceof Element ? data.target.value : data;
    this.setState((prevState) => {
      return { formData: { ...prevState.formData, [name]: value } };
    });
    this.props.onChange(this.state.formData);
  };

  getChildContext() {
    return {
      value: this.state.formData,
      errors: this.props.errors,
      onChange: this.handleChange,
    };
  }

  render() {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars -- This will take care of itself when converted to function component */
    const { errors, object, onChange, onSubmit, ...props } = this.props;

    return <Form onSubmit={this.onSubmit} {...props} />;
  }
}

export default BoundForm;
