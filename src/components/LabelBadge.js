import PropTypes from 'prop-types';
import React from 'react';
import styles from './LabelBadge.scss';

export default class LabelBadge extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    maxWidth: PropTypes.number,
    onRemove: PropTypes.func,
    removable: PropTypes.bool,
    value: PropTypes.string.isRequired
  }

  static defaultProps = {
    removable: true,
    maxWidth: 14
  };

  render() {
    const { className, label, maxWidth, onRemove, removable, value } = this.props;
    const labelClasses = 'bg-faded text-muted rounded-left d-inline-flex align-self-center h-100 px-3 py-2';
    const valueClasses = `label-badge-value ${styles.trim} rounded-right px-3 py-2`;
    const style = {
      maxWidth: maxWidth ? `${maxWidth}rem` : null
    };

    return (
      //TODO: use '.card' instead of hard coded boarder style for label badge
      // we aren't doing it right now because apm and bootstrap-apm has a conflict for .card
      <span className={`rounded d-inline-flex flex-row justify-content-between align-items-center ${className} ${styles.outer}`}>
        {label ?
          <strong className={labelClasses} style={style}>
            <span className={styles.trim}>{label}</span>
          </strong>
          : null}
        <span className={valueClasses} style={style}>{value}</span>
        {removable ? <a className="close mr-2" onClick={onRemove}>&times;</a> : null}
      </span>
    );
  }
}

