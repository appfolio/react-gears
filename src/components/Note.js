import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import CardBody from './CardBody';
import CardText from './CardText';
import NoteHeader from './NoteHeader.js';
import DeletedNote from './DeletedNote.js';
import EditableNote from './EditableNote.js';

class Note extends React.Component {
  static displayName = 'Note';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    note: PropTypes.shape({
      deleted: PropTypes.bool,
      editing: PropTypes.bool,
      text: PropTypes.string.isRequired
    }).isRequired,
    onCancel: PropTypes.func,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onSave: PropTypes.func,
    onUndelete: PropTypes.func,
    rows: PropTypes.number,
    saving: PropTypes.boolean
  };

  static defaultProps = {
    className: 'bg-white mb-3',
    rows: EditableNote.defaultProps.rows,
    saving: EditableNote.defaultProps.saving
  };

  render() {
    const { children, className, note, onCancel, onChange, onDelete, onEdit, onSave, onUndelete, rows, saving }
      = this.props;
    const { deleted, editing, text } = note;

    if (deleted) {
      return (
        <DeletedNote
          className={className}
          note={note}
          onUndelete={onUndelete}
        />);
    } else if (editing) {
      return (
        <EditableNote
          className={className}
          note={note}
          onCancel={onCancel}
          onChange={onChange}
          onSave={onSave}
          rows={rows}
          saving={saving}
        />);
    }
    return (
      <Card color="info" className={className} outline>
        <NoteHeader note={note} onDelete={onDelete} onEdit={onEdit} />
        <CardBody>
          <CardText style={{ whiteSpace: 'pre-wrap' }}>{text}</CardText>
          {children}
        </CardBody>
      </Card>
    );
  }
}

export default Note;
