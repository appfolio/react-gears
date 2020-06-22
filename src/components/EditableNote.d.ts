import Note from './TypeHelpers/NoteType';
import * as React from 'react';
import { ReactNode } from 'react';

interface EditableNoteProps {
  children?: ReactNode;
  className?: string;
  note: Note;
  onCancel: (ev: React.MouseEvent) => void;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: (ev: React.MouseEvent) => void;
  rows?: number;
  saving?: boolean;
  saveLabel?: ReactNode;
  savingLabel?: ReactNode;
}

declare class EditableNote extends React.Component<EditableNoteProps, {}> { }
export default EditableNote;
