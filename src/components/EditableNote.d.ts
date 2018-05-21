import Note from './TypeHelpers/NoteType';
import * as React from 'react';

interface EditableNoteProps {
  note: Note;
  onCancel: (ev: React.MouseEventHandler<any>) => void;
  onChange: (ev: React.ChangeEventHandler<HTMLInputElement>) => void;
  onSave: (ev: React.MouseEventHandler<any>) => void;
}

declare class EditableNote extends React.Component<EditableNoteProps, {}> { }
export default EditableNote;
