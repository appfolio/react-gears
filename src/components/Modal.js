import { Modal as ReactstrapModal } from 'reactstrap';

/**
 * TODO
 * As of 04/27/2017 the reactstrap Modal class will autofocus itself upon opening, preventing any
 * elements within the modal from autofocusing.
 *
 * There is a PR open with a fix here https://github.com/reactstrap/reactstrap/pull/389 that solves
 * the problem by allowing users to pass autofocus={false} to Modals. When the PR has been merged
 * we can remove the togglePortal override below.
 */
class Modal extends ReactstrapModal {
  togglePortal() {
    if (this.props.isOpen) {
      // See https://github.com/reactstrap/reactstrap/pull/389/files#diff-3ddc036af206541151e86f03cfc0c0eeR113
      if (this.props.autoFocus !== false) {
        this._focus = true;
      }
      this.show();
    } else {
      this.hide();
    }
  }
}

Modal.defaultProps = {
  ...Modal.defaultProps,
  backdrop: false,
  zIndex: 10050
};

export default Modal;
