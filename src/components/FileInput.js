import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';

class FileInput extends React.Component {
  onChange = (changeEvent) => {
    if (this.props.onChange) {
      this.props.onChange(changeEvent.target.files);
    }
  };

  render() {
    const { type, onChange, ...props } = this.props;

    return <Input type="file" onChange={this.onChange} {...props} />;
  }
}

FileInput.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.any,
};

export default FileInput;
