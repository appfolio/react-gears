import PropTypes from 'prop-types';
import React from 'react';
import Close from './Close';

export default class LabelBadge extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    maxWidth: PropTypes.number,
    onRemove: PropTypes.func,
    removable: PropTypes.bool,
    value: PropTypes.node.isRequired
  }

  static defaultProps = {
    className: '',
    removable: true,
    maxWidth: 14
  };

  render() {
    const { className, label, maxWidth, onRemove, removable, value } = this.props;
    const labelClasses = 'bg-light text-muted rounded-left d-inline-flex align-self-center h-100 px-3 py-2';
    const valueClasses = 'label-badge-value text-truncate rounded-right px-3 py-2';
    const style = {
      maxWidth: maxWidth ? `${maxWidth}rem` : null
    };

    return (
      <span className={`border rounded d-inline-flex flex-row justify-content-between align-items-center ${className}`}>
        {label ?
          <strong className={labelClasses} style={style}>
            <span className="text-truncate">{label}</span>
          </strong>
          : null}
        <span className={valueClasses} style={style}>{value}</span>
        {removable ? <Close className="mr-2" onClick={onRemove} /> : null}
      </span>
    );
  }
}

