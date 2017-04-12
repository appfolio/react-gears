import React from 'react';
import { Alert, Card, CardBlock, CardHeader, CardText, Flag } from '../';
import EditableNote from './EditableNote.js';

import fecha from 'fecha';

// TODO extract to date helper, i18n:
const format = date => fecha.format(date, 'ddd, MMMM d, YYYY "at" h:mm A');

const DeletedNote = ({ note, onUndelete }) => (
  <Alert color="success" icon>
    Note deleted.
    {onUndelete ? <a href="#" className="ml-1" onClick={() => onUndelete(note)}>undo</a> : null}
  </Alert>
);

const Note = note => {
  const { children, className, date, deleted, edited, editing, from, text,
         onCancel, onChange, onSave, onDelete, onEdit, onUndelete } = note;
  return (
    <div className={`mb-3 ${className}`}>
      {deleted ?
        <DeletedNote note={note} onUndelete={onUndelete} /> :
        editing ?
          <EditableNote
            note={note}
            onCancel={onCancel}
            onChange={onChange}
            onSave={onSave}
          /> :
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
  onCancel: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onDelete: React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func,
  onUndelete: React.PropTypes.func.isRequired,
  text: React.PropTypes.string
};

Note.defaultProps = {
  className: '',
  date: new Date(),
  deleted: false,
  edited: false,
  editing: false,
};

export default Note;
