import PropTypes from 'prop-types';
import React from 'react';

export default class Task extends React.Component {
  static propTypes = {
    callback: PropTypes.func,
    children: PropTypes.node,
    link: PropTypes.string,
    target: PropTypes.string,
  };

  onClick = event => {
    const { callback } = this.props;

    if (callback) {
      event.preventDefault();
      callback();
    }
  }

  render() {
    const { link, target, children } = this.props;

    const href = link || document.location.href;

    return (
      <li>
        <a href={href} onClick={this.onClick} target={target}>{children}</a>
      </li>
    );
  }
}