import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card, CardBlock, CardHeader, CardText, Badge } from 'reactstrap';
import DeletedNote from './DeletedNote.js';
import EditableNote from './EditableNote.js';

import fecha from 'fecha';

// TODO extract to date helper, i18n:
const dateFormat = (date, format) => fecha.format(date, format);

class Note extends React.Component {
  static displayName = 'Note';

  static propTypes = {
    className: PropTypes.string,
    note: PropTypes.object,
    onCancel: PropTypes.func,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onSave: PropTypes.func,
    onUndelete: PropTypes.func
  };

  static defaultProps = {
    className: ''
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
            <Card color="info" outline>
              <CardHeader className="d-flex justify-content-start p-2 bg-info">
                {edited ? <span ref="edited"><Badge color="primary text-uppercase mr-2">Edited</Badge></span> : null}
                <span className="text-muted">
                  <span className="hidden-xs-down">
                    {edited ? 'Last edited' : 'Posted'} {from ? <span ref="from">by {from}</span> : ' '} on <span ref="date">{dateFormat(date, 'ddd, MMMM D, YYYY "at" h:mm A')}</span>
                  </span>
                  <span className="hidden-sm-up">
                    {from ? <span>{from} </span> : null}<span ref="shortDate">{dateFormat(date, 'M/D/YY h:mm A')}</span>
                  </span>
                </span>
                <span className="ml-auto">
                  {onEdit ? <Button color="link" ref="edit" onClick={() => onEdit(note)} className="mr-3 p-0">edit</Button> : null}
                  {onDelete ? <Button color="link" ref="delete" onClick={() => onDelete(note)} className="p-0">delete</Button> : null}
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
