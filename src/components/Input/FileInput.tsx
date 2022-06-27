import React, { ChangeEvent } from 'react';
import Input from './Input';

type FileInputProps = {
  onChange: (files: FileList | null) => void;
  type: 'file';
};

class FileInput extends React.Component<FileInputProps> {
  handleChange = (changeEvent: ChangeEvent) => {
    const files = (changeEvent.target as HTMLInputElement).files;
    if (this.props.onChange) {
      this.props.onChange(files);
    }
  };

  render() {
    /* eslint-disable-next-line  @typescript-eslint/no-unused-vars -- Let's figure out a better way to omit props for this scenario */
    const { type, onChange, ...props } = this.props;

    return <Input type="file" onChange={this.handleChange} {...props} />;
  }
}

export default FileInput;
