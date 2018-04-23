import Omit from '../util/Omit';
interface FileInputPropTypes extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  onChange?: (files: FileList) => void;
}
declare const FileInput: React.StatelessComponent<FileInputPropTypes>;
export default FileInput;
