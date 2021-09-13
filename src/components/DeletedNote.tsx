import React from 'react';
import Alert from './Alert';
import Button from './Button';
import Note from './TypeHelpers/NoteType';

type DeletedNoteProps = {
  className?: string,
  note: Note,
  onUndelete?: (note: Note) => void,
}

const DeletedNote: React.FunctionComponent<DeletedNoteProps> = ({
  ...props
}) => {
  const { className, note, onUndelete } = props;

  return (
    <Alert color="success" icon className={className}>
      <span className="align-middle">Note deleted.</span>
      {onUndelete &&
        <Button color="link" onClick={() => onUndelete(note)} className="ms-1 p-0">
          Undo
        </Button>
      }
    </Alert>
  );
};

DeletedNote.displayName = 'DeletedNote';

export default DeletedNote;
