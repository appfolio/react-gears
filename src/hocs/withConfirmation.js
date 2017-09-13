import React, { Component } from 'react';

const closeAfterCallback = (callback, closeModal) => (...args) => {
  const promise = callback(...args);

  if (promise && promise.catch && promise.then) {
    promise.then(closeModal);
  } else {
    closeModal();
  }

  return promise;
};

export default ({
  callbackPropName,
  confirmComponent,
  hideOnConfirm
}) => WrappedComponent =>
  class WithConfirmation extends Component {
    state = { isConfirming: false };

    toggleConfirmation = () => {
      this.setState({
        isConfirming: !this.state.isConfirming
      });
    };

    closeConfirmation = () => {
      this.setState({
        isConfirming: false
      });
    };

    renderConfirm = () => {
      if (!this.state.isConfirming) {
        return null;
      }

      if (typeof confirmComponent !== 'function') {
        return confirmComponent;
      }

      const Confirm = confirmComponent;

      const confirmCallback = closeAfterCallback(
        this.props[callbackPropName],
        this.closeConfirmation
      );

      return (
        <Confirm
          closeConfirmation={this.closeConfirmation}
          onConfirm={confirmCallback}
          {...this.props}
        />
      );
    };

    renderWrappedComponent = () => {
      if (this.state.isConfirming && hideOnConfirm) {
        return null;
      }

      const { [callbackPropName]: callback, skipConfirmation } = this.props;

      const newCallback = skipConfirmation ? callback : this.toggleConfirmation;

      const newProps = {
        ...this.props,
        [callbackPropName]: newCallback
      };

      return <WrappedComponent {...newProps} />;
    };

    render() {
      return (
        <span>
          {this.renderConfirm()}
          {this.renderWrappedComponent()}
        </span>
      );
    }
  };
