import React, { ChangeEvent } from 'react';
import Input from './Input';

interface FileInputProps extends Omit<React.ComponentProps<typeof Input>, 'type'> {
  onChange: (files: FileList | null) => void;
}

const FileInput = (props: FileInputProps) => {
  const { onChange } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    onChange?.(files);
  };

  return <Input type="file" onChange={handleChange} />;
};

export default FileInput;
