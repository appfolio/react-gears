import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';
import Col from './Col';
import HelpBubble from './HelpBubble';
import Icon from './Icon';
import Note from './Note';
import Row from './Row';

export default class Notes extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    onAdd: PropTypes.func,
    onCancel: PropTypes.func,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    onDownload: PropTypes.func,
    onEdit: PropTypes.func,
    onSave: PropTypes.func,
    onUndelete: PropTypes.func,
    notes: PropTypes.array,
  }

  static defaultProps = {
    className: '',
    notes: []
  }

  render() {
    const { children, className, notes, onAdd, onDownload, onCancel, onChange, onDelete, onEdit, onSave, onUndelete } = this.props;

    return (
      <div className={className}>
        <Row className="mb-3">
          <Col>
            <h3>
              Notes
              <HelpBubble
                title="Notes"
                placement="right"
                className="text-primary ml-1"
              >
                Make notes on several different pages. Notes are private to property managers.
                The 'Download PDF' button will download all the notes on a page as a PDF to your computer.
              </HelpBubble>
            </h3>
          </Col>
          <Col className="text-right">
            {onDownload ?
              <Button size="sm" className="mr-1" onClick={onDownload}>
                <Icon name="download" fixedWidth />
                <span className="hidden-xs-down">Download PDF</span>
              </Button>
              : null}
            {onAdd ?
              <Button size="sm" onClick={onAdd}>
                <Icon name="plus-circle" fixedWidth />
                <span className="hidden-xs-down">Add Note</span>
              </Button>
              : null}
          </Col>
        </Row>
        {children ||
          notes.map((note, i) =>
            <Note
              note={note}
              key={i}
              onCancel={onCancel}
              onChange={onChange}
              onDelete={onDelete}
              onEdit={onEdit}
              onSave={onSave}
              onUndelete={onUndelete}
            />
          )
        }
      </div>
    );
  }
}
