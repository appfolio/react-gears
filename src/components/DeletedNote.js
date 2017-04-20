import React from 'react';
import { Alert } from '../';

class DeletedNote extends React.Component {
  static propTypes = {
    note: React.PropTypes.object.isRequired,
    onUndelete: React.PropTypes.func
  };

  render() {
    const { note, onUndelete } = this.props;

    return (
      <Alert color="success" icon>
        Note deleted.
        {onUndelete ? <a ref="undo" href="#" className="ml-1" onClick={() => onUndelete(note)}>undo</a> : null}
      </Alert>
    );
  }
}

export default DeletedNote;
