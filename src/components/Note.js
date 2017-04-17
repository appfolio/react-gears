import React from 'react';
import { Card, CardBlock, CardHeader, CardText, Flag } from '../';
import DeletedNote from './DeletedNote.js';
import EditableNote from './EditableNote.js';

import fecha from 'fecha';

// TODO extract to date helper, i18n:
const format = date => fecha.format(date, 'ddd, MMMM d, YYYY "at" h:mm A');

class Note extends React.Component {
  static propTypes = {
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

  static defaultProps = {
    className: '',
    date: new Date(),
    deleted: false,
    edited: false,
    editing: false,
  };

  render() {
    const { children, className, date, deleted, edited, editing, from, text,
            onCancel, onChange, onSave, onDelete, onEdit, onUndelete } = this.props;
    return (
      <div className={`mb-3 ${className}`}>
        {deleted ?
          <DeletedNote
            ref="deleted"
            note={note}
            onUndelete={onUndelete}
          /> :
          editing ?
            <EditableNote
              ref="editable"
              note={note}
              onCancel={onCancel}
              onChange={onChange}
              onSave={onSave}
            /> :
            <Card ref="note" className="rounded-top">
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
  }
}

export default Note;
