import * as React from 'react';

interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  onChange?: (files: FileList) => void;
}
declare class FileInput extends React.Component<FileInputProps, {}> { }
export default FileInput;
