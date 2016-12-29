import React from 'react';
import { Form } from 'reactstrap';
import noop from 'lodash/noop';
import set from 'lodash/set';

class BoundForm extends React.Component {

  static propTypes = {
    object: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func
  };

  static defaultProps = {
    onSubmit: noop
  };

  constructor(props) {
    super(props);

    this.state = {
      formData: JSON.parse(JSON.stringify(props.object))
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(e, this.state.formData);
  }

  handleChange = name => data => {
    const value = data.target instanceof Element ? data.target.value : data;
    this.setState({ formData: set(this.state.formData, name, value) });
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      const value = this.state.formData[child.props.name] || ''
          , valueObj = {} //(typeof value === 'object') ? value : {};

      return React.cloneElement(child, { value, ...valueObj, onChange: this.handleChange(child.props.name) });
    });

    return (
      <Form children={children} onSubmit={this.onSubmit} />
    );
  }
}

export default BoundForm;
