import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Modal from './Modal';
import Spinner from './Spinner';

const noop = () => {};

/**
 * A 'Waiting' indicator for unknown durations. See https://qa.qa.appfolio.com/gears/waiting
 */
export default class Waiting extends React.Component {
  static propTypes = {
    backdrop: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    title: PropTypes.string,
  }

  static defaultProps = {
    title: 'Please Wait',
  }

  render() {
    const {
      children,
      className,
      title,
      ...props
    } = this.props;

    return (
      <Modal
        {...props}
        className={className}
        contentClassName="bg-dark border-0 text-center text-light"
        toggle={noop}
        style={{
          margin: '40vh auto',
          width: '9rem'
        }}
      >
        {title ?
          <header className="px-4 pt-4">
            {title}
          </header>
          : null}
        <div className="p-4">
          {children || <Spinner style={{ fontSize: '30px' }} />}
        </div>
      </Modal>
    );
  }
}
