import React from 'react';
import { HelpBubble, Row, Col, Button, Icon, Note } from '../';

export default class Notes extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    notes: React.PropTypes.array,
  }

  static defaultProps = {
    // maxWidth: 14
    notes: []
  }

  render() {
    const { className, notes, onDelete, onEdit, onUndelete } = this.props;

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
            <Button size="sm" className="mr-1">
              <Icon name="download" fixedWidth />
              <span className="hidden-xs-down">Download PDF</span>
            </Button>
            <Button size="sm">
              <Icon name="plus-circle" fixedWidth />
              <span className="hidden-xs-down">Add Note</span>
            </Button>
          </Col>
        </Row>
        {notes.map(note => <Note onDelete={onDelete}    nnnonEdit={onEdit} onUndelete={onUndelete} {...note} />)}
      </div>
    );
  }
}
