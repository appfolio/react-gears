import Note from './TypeHelpers/NoteType';
import * as React from 'react';

interface EditableNoteProps {
  children?: ReactNode;
  className?: string;
  note: Note;
  onCancel: (ev: React.MouseEventHandler<any>) => void;
  onChange: (ev: React.ChangeEventHandler<HTMLInputElement>) => void;
  onSave: (ev: React.MouseEventHandler<any>) => void;
  rows?: number;
  saving?: boolean;
  saveLabel?: ReactNode;
  savingLabel?: ReactNode;
}

declare class EditableNote extends React.Component<EditableNoteProps, {}> { }
export default EditableNote;
