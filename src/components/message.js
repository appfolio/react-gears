import React, { Component } from 'react';
import styles from './message.scss';

/**
 * Simple example component.
 */
export default class Message extends Component {
  render() {
    return (
      <div className={styles.message}>
        <h1>Hello Appfolio!</h1>
      </div>
    );
  }
}
