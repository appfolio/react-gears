import PropTypes from 'prop-types';
import React from 'react';
import { Input } from 'reactstrap';

class FileInput extends React.Component {
  onChange = changeEvent => {
    if (this.props.onChange) {
      this.props.onChange(changeEvent.target.files);
    }
  }

  render() {
    const {
      type,
      onChange,
      ...props
    } = this.props;

    return (
      <Input type="file" onChange={this.onChange} {...props} />
    );
  }
}

FileInput.propTypes = {
  onChange: PropTypes.func
};

export default FileInput;
