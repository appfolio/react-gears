import Note from './NoteType';

interface DeletedNotePropTypes {
  note: Note;
  onUndelete: (Note) => void;
}
declare const DeletedNote: React.StatelessComponent<DeletedNotePropTypes>;
export default DeletedNote;
