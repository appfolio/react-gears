import React from 'react';
import styles from './LabelBadge.scss';

export default class LabelBadge extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCross() {
    const { dismissible, onClear } = this.props;
    let result = null;
    if (dismissible) {
      result = (
        <button
          type="button"
          className="close text-muted pull-xs-right ml-2 js-close-button"
          onClick={onClear}
        >
          <span>&times;</span>
        </button>
      );
    }
    return result;
  }

  render() {
    const { label, value } = this.props;
    return (
      <span className={`${styles.pairContainer} mr-2 mb-2`}>
        <span className={`${styles.label} bg-faded text-muted font-weight-bold px-3 py-1 js-label-badge-label`}>
          {label}:
        </span>
        <span className={`${styles.value} pl-2 py-1 mr-2 js-label-badge-value`}>
          {value}
          {this.renderCross()}
        </span>
      </span>
    );
  }
}

LabelBadge.defaultProps = {
  dismissible: true,
}
