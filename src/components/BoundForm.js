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

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(e, this.state.formData);
  }

  handleChange = (event, path = []) => {
    path.push(event.target.name);
    const value = event.target.checked || event.target.value;
    this.setState({ formData: set(this.state.formData, path, value) });
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      const value = this.state.formData[child.props.name] || ''
          , valueObj = (typeof value === 'object') ? value : {};

      return React.cloneElement(child, {
        value,
        ...valueObj,
        onChange: this.handleChange
      });
    });

    return (
      <Form children={children} onSubmit={this.onSubmit} />
    );
  }
}

export default BoundForm;
