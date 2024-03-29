import React, { ChangeEvent } from 'react';
import Input from './Input';

export interface FileInputProps extends Omit<React.ComponentProps<typeof Input>, 'type'> {
  onChange: (files: FileList | null) => void;
}

const FileInput = (props: FileInputProps) => {
  const { onChange } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    onChange?.(files);
  };

  return <Input {...props} type="file" onChange={handleChange} />;
};

export default FileInput;
