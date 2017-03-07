import React from 'react';
import { Alert, Card, CardBlock, CardHeader, CardText, Flag, HelpBubble, Row, Col, Button, Icon } from '../';

import fecha from 'fecha';

const Note = note => {
  const { from, date, edited, deleted, text, onDelete, onEdit } = note;
  return (
    <div className="mb-3">
      {!deleted ? (
        <Card>
          <CardHeader className="d-flex justify-content-start p-2">
            {edited ? <span><Flag color="primary text-uppercase mr-2">Edited</Flag></span> : null}
            <span className="text-muted">
              Last edited by {from} on {fecha.format(date, 'ddd, MMMM d, YYYY "at" h:mm A')}
            </span>
            <span className="ml-auto">
              <a href="#" onClick={() => onEdit(note)} className="mr-3">edit</a>
              <a href="#" onClick={() => onDelete(note)}>delete</a>
            </span>
          </CardHeader>
          <CardBlock>
            <CardText>
              {text}
            </CardText>
          </CardBlock>
        </Card>
      ) : (
        <Alert color="success" icon>
          Note deleted. <a href="#" onClick={() => onUndelete(note)}>undo</a>
        </Alert>
      )}
    </div>
  );
};

Note.propTypes = {
  from: React.PropTypes.string,
  date: React.PropTypes.object,
  edited: React.PropTypes.bool,
  deleted: React.PropTypes.bool,
  text: React.PropTypes.string,
  onDelete: React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  onUndelete: React.PropTypes.func.isRequired
};

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
    const { className, notes,onDelete, onEdit, onUndelete } = this.props;

    return (
      <div className={className}>
        <Row className="mb-3">
          <Col>
            <h3>
              Notes <HelpBubble title="Notes" placement="right" className="text-primary">
                      Make notes on several different pages. Notes are private to property managers.
                      The 'Download PDF' button will download all the notes on a page as a PDF to your computer.
                    </HelpBubble>
            </h3>
          </Col>
          <Col className="text-right">
            <Button size="sm" className="mr-1">
              <Icon name="download" fixedWidth />
              Download PDF
            </Button>
            <Button size="sm">
              <Icon name="plus-circle" fixedWidth />
              Add Note
            </Button>
          </Col>
        </Row>
        {notes.map((note, i) => <Note onDelete={onDelete} onEdit={onEdit} onUndelete={onUndelete} {...note} />)}
      </div>
    );
  }
}
