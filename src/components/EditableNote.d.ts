import Note from './Note';

interface EditableNotePropTypes {
  note: Note;
  onCancel: (ev: React.MouseEventHandler<any>) => void;
  onChange: (ev: React.ChangeEventHandler<HTMLInputElement>) => void;
  onSave: (ev: React.MouseEventHandler<any>) => void;
}
declare const EditableNote: React.StatelessComponent<EditableNotePropTypes>;
export default EditableNote;
