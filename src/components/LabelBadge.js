import React from 'react';
import styles from './LabelBadge.scss';

export default class LabelBadge extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    label: React.PropTypes.string,
    maxWidth: React.PropTypes.number,
    onRemove: React.PropTypes.func,
    removable: React.PropTypes.bool,
    value: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    removable: true,
    maxWidth: 14
  };

  render() {
    const { className, label, maxWidth, onRemove, removable, value } = this.props;
    const labelClasses = `${styles.trim} bg-faded text-muted rounded-left d-inline-flex align-self-center h-100 px-3 py-2`;
    const valueClasses = `label-badge-value ${styles.trim} rounded-right px-3 py-2`;
    const style = {
      maxWidth: maxWidth ? `${maxWidth}rem` : null
    };

    return (
      <span className={`card rounded d-inline-flex flex-row justify-content-between align-items-center ${className}`}>
        {label ?
          <strong className={labelClasses} data-label={label} style={style}>{label}</strong>
          : null}
        <span className={valueClasses} style={style}>{value}</span>
        {removable ? <a className="close mr-2" onClick={onRemove}>&times;</a> : null}
      </span>
    );
  }
}

