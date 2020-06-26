// @ts-nocheck
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
      <Alert color="success" icon className={className}>
        <span className="align-middle">Note deleted.</span>
        {onUndelete &&
          <Button color="link" onClick={() => onUndelete(note)} className="ml-1 p-0">
            undo
          </Button>
        }
      </Alert>
    );
  }
}

export default DeletedNote;
