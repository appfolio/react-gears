import PropTypes from 'prop-types';
import React from 'react';
import Alert from './Alert';

class DeletedNote extends React.Component {
  static propTypes = {
    note: PropTypes.object.isRequired,
    onUndelete: PropTypes.func
  };

  render() {
    const { note, onUndelete } = this.props;

    return (
      <Alert color="success" icon>
        Note deleted.
        {onUndelete ? <a href="#" className="ml-1" onClick={() => onUndelete(note)}>undo</a> : null}
      </Alert>
    );
  }
}

export default DeletedNote;
