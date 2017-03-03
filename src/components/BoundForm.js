import React from 'react';
import { Form } from 'reactstrap';
import noop from 'lodash.noop';
import set from 'lodash.set';

class BoundForm extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    errors: React.PropTypes.object,
    object: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func,
    onChange: React.PropTypes.func
  };

  static defaultProps = {
    errors: {},
    onSubmit: noop,
    onChange: noop
  };

  static childContextTypes = {
    value: React.PropTypes.object,
    errors: React.PropTypes.object,
    onChange: React.PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      formData: JSON.parse(JSON.stringify(props.object))
    };
  }

  getChildContext() {
    return {
      value: this.state.formData,
      errors: this.props.errors,
      onChange: this.handleChange
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(e, this.state.formData);
  }

  handleChange = name => data => {
    const value = data.target instanceof Element ? data.target.value : data;
    this.setState({ formData: set(this.state.formData, name, value) });
    this.props.onChange(this.state.formData);
  }

  render() {
    return (
      <Form children={this.props.children} onSubmit={this.onSubmit} />
    );
  }
}

export default BoundForm;
