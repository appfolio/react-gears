// @ts-nocheck
import PropTypes from 'prop-types';
import React from 'react';

import Note from './Note';

export default class Notes extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onCancel: PropTypes.func,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onSave: PropTypes.func,
    onUndelete: PropTypes.func,
    notes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired
    }))
  }

  static defaultProps = {
    className: '',
    notes: []
  }

  render() {
    const { children, className, notes, onCancel, onChange,
      onDelete, onEdit, onSave, onUndelete } = this.props;

    return (
      <div className={className}>
        {children ||
          notes.map(note => (
            <Note
              key={note.id ? `js-note-${note.id}` : null}
              note={note}
              onCancel={onCancel}
              onChange={onChange}
              onDelete={onDelete}
              onEdit={onEdit}
              onSave={onSave}
              onUndelete={onUndelete}
              saving={note.editing && note.saving}
            />
          ))
        }
      </div>
    );
  }
}
