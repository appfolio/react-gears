import React, { Component } from 'react';
import { Input } from 'reactstrap';

class FileInput extends Component {

  onChange = changeEvent => {
    if (this.props.onChange) {
      this.props.onChange(changeEvent.target.files);
    }
  }

  render() {
    const {
      // unused, but this takes it out of ...props
      type,
      onChange,
      // these are used
      name,
      ...props
    } = this.props;
    return (
      <Input type="file" name={name} onChange={this.onChange} {...props} />
    );
  }
}

FileInput.propTypes = {
  onChange: React.PropTypes.function,
  name: React.PropTypes.string.isRequired
};

export default FileInput;
