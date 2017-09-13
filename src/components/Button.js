import Button from 'reactstrap/lib/Button';
import React from 'react';
import WithConfirmation from '../hocs/withConfirmation';
export default WithConfirmation({
  callbackPropName: 'onClick',
  confirmComponent: ({ onConfirm }) => (
    <div
      onClick={onConfirm}
    >
      hello
    </div>
  )
})(Button);
