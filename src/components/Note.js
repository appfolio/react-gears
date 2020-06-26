import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import CardBody from './CardBody';
import CardText from './CardText';
import NoteHeader from './NoteHeader';
import DeletedNote from './DeletedNote';
import EditableNote from './EditableNote';

class Note extends React.Component {
  static displayName = 'Note';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dateFormat: PropTypes.string,
    showTimezone: PropTypes.bool,
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
    saving: PropTypes.bool,
    saveLabel: PropTypes.node,
    savingLabel: PropTypes.node
  };

  static defaultProps = {
    className: 'bg-white mb-3',
    dateFormat: 'ddd, MMMM D, YYYY "at" h:mm A',
    showTimezone: true,
    rows: EditableNote.defaultProps.rows,
    saving: EditableNote.defaultProps.saving,
    saveLabel: EditableNote.defaultProps.saveLabel,
    savingLabel: EditableNote.defaultProps.savingLabel,
  };

  render() {
    const { children, className, dateFormat, note, onCancel, onChange, onDelete, onEdit, onSave, onUndelete, rows, saving, saveLabel, savingLabel, showTimezone }
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
          saveLabel={saveLabel}
          savingLabel={savingLabel}
        />);
    }
    return (
      <Card className={className}>
        <NoteHeader note={note} dateFormat={dateFormat} showTimezone={showTimezone} onDelete={onDelete} onEdit={onEdit} />
        <CardBody>
          <CardText style={{ whiteSpace: 'pre-wrap' }}>{text}</CardText>
          {children}
        </CardBody>
      </Card>
    );
  }
}

export default Note;
