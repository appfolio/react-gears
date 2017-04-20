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
    editing: React.PropTypes.bool,
    note: React.PropTypes.object,
    onCancel: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onDelete: React.PropTypes.func,
    onEdit: React.PropTypes.func,
    onSave: React.PropTypes.func,
    onUndelete: React.PropTypes.func
  };

  static defaultProps = {
    className: '',
    date: new Date(),
    deleted: false,
    edited: false,
    editing: false,
  };

  render() {
    const { children, className, note, onCancel, onChange, onSave, onDelete, onEdit, onUndelete } = this.props;
    const { date, deleted, edited, editing, from, text } = note;

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
            <Card ref="note" className="rounded">
              <CardHeader className="d-flex justify-content-start p-2 rounded-top bg-faded">
                {edited ? <span ref="edited"><Flag color="primary text-uppercase mr-2">Edited</Flag></span> : null}
                <span className="text-muted">
                  {edited ? 'Last edited' : 'Posted'} {from ? <span ref="from">by {from}</span> : ' '}on <span ref="date">{format(date)}</span>
                </span>
                <span className="ml-auto">
                  {onEdit ? <a href="#" ref="edit" onClick={() => onEdit(note)} className="mr-3">edit</a> : null}
                  {onDelete ? <a href="#" ref="delete" onClick={() => onDelete(note)}>delete</a> : null}
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
