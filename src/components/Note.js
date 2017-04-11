import React from 'react';
import { Alert, Button, Card, CardBlock, CardHeader, CardText, Flag, Input } from '../';

import fecha from 'fecha';

// TODO extract to date helper, i18n:
const format = date => fecha.format(date, 'ddd, MMMM d, YYYY "at" h:mm A');

const DeletedNote = ({ note, onUndelete }) => (
  <Alert color="success" icon>
    Note deleted.
    {onUndelete ? <a href="#" className="ml-1" onClick={() => onUndelete(note)}>undo</a> : null}
  </Alert>
);

const EditableText = ({ note, onEdit }) => (
  <Card>
    <CardBlock>
      <Input type="textarea" value={note.text} rows="5" />
      <div className="mt-4">
        <Button
          color="primary"
          className="mr-1"
          onClick={() => onEdit(note)}
        >Save</Button>
        <Button>Cancel</Button>
      </div>
    </CardBlock>
  </Card>
);

const Note = note => {
  const { children, className, date, deleted, edited, editing, from, text, onDelete, onEdit, onUndelete } = note;
  return (
    <div className={`mb-3 ${className}`}>
      {deleted ?
        <DeletedNote note={note} onUndelete={onUndelete} /> :
        editing ?
          <EditableText note={note} onEdit={onEdit} /> :
          <Card className="rounded-top">
            <CardHeader className="d-flex justify-content-start p-2 rounded-top bg-faded">
              {edited ? <span><Flag color="primary text-uppercase mr-2">Edited</Flag></span> : null}
              <span className="text-muted">
                {edited ? 'Last edited' : 'Posted'} {from ? `by ${from} ` : ' '}on {format(date)}
              </span>
              <span className="ml-auto">
                {onEdit ? <a href="#" onClick={() => onEdit(note)} className="mr-3">edit</a> : null}
                {onDelete ? <a href="#" onClick={() => onDelete(note)}>delete</a> : null}
              </span>
            </CardHeader>
            <CardBlock>
              <CardText style={{ whiteSpace: 'pre-wrap' }}>{text}</CardText>
              {children}
            </CardBlock>
          </Card>
       }
    </div>
  );
};

Note.propTypes = {
  className: React.PropTypes.string,
  date: React.PropTypes.object,
  deleted: React.PropTypes.bool,
  edited: React.PropTypes.bool,
  editing: React.PropTypes.bool,
  from: React.PropTypes.string,
  onDelete: React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  onUndelete: React.PropTypes.func.isRequired,
  text: React.PropTypes.string
};

Note.defaultProps = {
  date: new Date(),
  deleted: false,
  editable: true,
  edited: false,
  editing: false,
};

export default Note;
