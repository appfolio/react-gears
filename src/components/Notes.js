import PropTypes from 'prop-types';
import React from 'react';

import BlockPanel from './BlockPanel';
import Button from './Button';
import HelpBubble from './HelpBubble';
import Icon from './Icon';
import Note from './Note';

const generalHelpString =
  'Make notes on several different pages. Notes are private to property managers.';
const downloadHelpString =
  'The \'Download PDF\' button will download all the notes on a page as a PDF to your computer.';

export default class Notes extends React.Component {
  static propTypes = {
    addControl: PropTypes.node,
    adding: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    help: PropTypes.string,
    onAdd: PropTypes.func,
    onCancel: PropTypes.func,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    onDownload: PropTypes.func,
    onEdit: PropTypes.func,
    onSave: PropTypes.func,
    onUndelete: PropTypes.func,
    notes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired
    }))
  }

  static defaultProps = {
    className: '',
    help: generalHelpString,
    notes: []
  }

  renderHelpBubble() {
    const { help, onDownload } = this.props;
    return (help &&
      <HelpBubble title="Notes" placement="right" className="text-primary ml-1">
        {`${help}${onDownload ? `  ${downloadHelpString}` : ''}`}
      </HelpBubble>
    );
  }

  render() {
    const { addControl, adding, children, className, notes, onAdd, onDownload, onCancel, onChange,
      onDelete, onEdit, onSave, onUndelete } = this.props;
    const controls = [];
    if (onDownload) {
      const control = (
        <Button key="js-notes-download" size="sm" className="mr-1" onClick={onDownload}>
          <Icon name="download" fixedWidth />
          <span className="hidden-xs-down">Download PDF</span>
        </Button>
      );
      controls.push(control);
    }
    if (onAdd) {
      const control = (
        <Button key="js-notes-edit" size="sm" onClick={onAdd}>
          <Icon name="plus-circle" fixedWidth />
          <span className="hidden-xs-down">Add Note</span>
        </Button>
      );
      controls.push(control);
    }

    return (
      <BlockPanel
        title={<span>Notes{this.renderHelpBubble()}</span>}
        className={className}
        controls={controls}
      >
        {adding && onAdd && addControl}
        {children ||
          notes.map(note => (
            <Note
              key={`js-note-${note.id}`}
              note={note}
              onCancel={onCancel}
              onChange={onChange}
              onDelete={onDelete}
              onEdit={onEdit}
              onSave={onSave}
              onUndelete={onUndelete}
            />
          ))
        }
      </BlockPanel>
    );
  }
}
