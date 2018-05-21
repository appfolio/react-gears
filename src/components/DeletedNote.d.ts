import Note from './TypeHelpers/NoteType';
import * as React from 'react';

interface DeletedNoteProps {
  note: Note;
  onUndelete: (Note) => void;
}
declare class DeletedNote extends React.Component<DeletedNoteProps, {}> { }
export default DeletedNote;
