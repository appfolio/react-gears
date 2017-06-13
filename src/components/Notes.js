import React from 'react';
import { HelpBubble, Row, Col, Button, Icon, Note } from '../';

export default class Notes extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    onAdd: React.PropTypes.func,
    onCancel: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onDelete: React.PropTypes.func,
    onDownload: React.PropTypes.func,
    onEdit: React.PropTypes.func,
    onSave: React.PropTypes.func,
    onUndelete: React.PropTypes.func,
    notes: React.PropTypes.array,
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
          notes.map(note =>
            <Note
              note={note}
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
