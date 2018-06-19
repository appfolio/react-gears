import PropTypes from 'prop-types';
import React from 'react';
import Alert from './Alert';
import Button from './Button';

class DeletedNote extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    note: PropTypes.object.isRequired,
    onUndelete: PropTypes.func
  };

  render() {
    const { className, note, onUndelete } = this.props;

    return (
<<<<<<< 80a4287d8123cd3aa286f3b3447a491338666dc8
      <Alert color="success" icon className={className}>
        <span className="align-middle">Note deleted.</span>
        {onUndelete &&
          <Button color="link" onClick={() => onUndelete(note)} className="ml-1 p-0">
            undo
          </Button>
        }
=======
      <Alert color="success" icon>
        Note deleted.
        {onUndelete ? <a href="#" className="ml-1" onClick={() => onUndelete(note)}>undo</a> : null}
>>>>>>> mb - fix all tests for react 16 and enzyme 3
      </Alert>
    );
  }
}

export default DeletedNote;
