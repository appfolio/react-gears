import React, { FC } from 'react';
import Alert from '../Alert/Alert';
import Button from '../Button/Button';
import { Note } from './Note.types';

type DeletedNoteProps = {
  className?: string;
  note: Note;
  onUndelete?: (note: Note) => void;
};

const DeletedNote: FC<DeletedNoteProps> = ({ ...props }) => {
  const { className, note, onUndelete } = props;

  return (
    <Alert color="success" icon className={className}>
      <span className="align-middle">Note deleted.</span>
      {onUndelete && (
        <Button color="link" onClick={() => onUndelete(note)} className="ms-1 p-0">
          Undo
        </Button>
      )}
    </Alert>
  );
};

DeletedNote.displayName = 'DeletedNote';

export default DeletedNote;
