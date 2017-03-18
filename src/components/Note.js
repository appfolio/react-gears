import React from 'react';
import { Alert, Button, Card, CardBlock, CardHeader, CardText, Flag, Input } from '../';

import fecha from 'fecha';
import styles from './Note.scss';

// TODO extract to helper:
const format = date => fecha.format(date, 'ddd, MMMM d, YYYY "at" h:mm A');

const DeletedNote = ({ note, onUndelete }) => (
  <Alert color="success" icon>
    Note deleted. <a href="#" onClick={() => onUndelete(note)}>undo</a>
  </Alert>
);

const EditableNote = ({ note, onEdit }) => (
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
  const { children, from, date, edited, editing, deleted, text, onDelete, onEdit, onUndelete } = note;
  return (
    <div className="mb-3">
      {deleted ?
        <DeletedNote note={note} onUndelete={onUndelete} /> : 
          editing ?
            <EditableNote note={note} onEdit={onEdit}/> : (
            <Card>
              <CardHeader className="d-flex justify-content-start p-2">
                {edited ? <span><Flag color="primary text-uppercase mr-2">Edited</Flag></span> : null}
                <span className="text-muted">
                  Last edited {from ? `by ${from} ` : ' '}on {format(date)}
                </span>
                <span className="ml-auto">
                  <a href="#" onClick={() => onEdit(note)} className="mr-3">edit</a>
                  <a href="#" onClick={() => onDelete(note)}>delete</a>
                </span>
              </CardHeader>
              <CardBlock>
                <CardText className={styles.text}>{children ? children : text}</CardText>
              </CardBlock>
            </Card>
          )}
    </div>
  );
};

Note.propTypes = {
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
  deleted: false,
  edited: false,
  editing: false,
};

export default Note;
