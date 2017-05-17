import React, { Component } from 'react';
import styles from './Callout.scss';

class Callout extends Component {

  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    color: React.PropTypes.string,
    background: React.PropTypes.string,
    placement: React.PropTypes.oneOf([
      'top',
      'bottom',
      'left',
      'right'
    ])
  };

  static defaultProps = {
    className: '',
    color: 'primary',
    background: 'faded',
    placement: 'bottom'
  };

  render() {
    const { background, children, className, color, placement, ...props } = this.props;

    return (
      <div
        className={`callout ${styles.callout} text-${color} m${placement[0]}-5 ${className}`}
        {...props}
      >
        <span className={`callout-arrow ${styles.arrow} ${styles[placement]} bg-${background}`} />
        <div className={`${styles.body} bg-${background} text-gray-dark p-3`}>
          {children}
        </div>
      </div>
    );
  }
}

export default Callout;
