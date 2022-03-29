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
    /* eslint-disable-next-line  @typescript-eslint/no-unused-vars -- Let's figure out a better way to omit props for this scenario */
    const { type, onChange, ...props } = this.props;

    return <Input type="file" onChange={this.onChange} {...props} />;
  }
}

FileInput.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.any,
};

export default FileInput;
