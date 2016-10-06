import React from 'react';
import Icon from 'react-fontawesome';
import classnames from 'classnames';

const iconMap = {
  warning: 'bullhorn',
  success: 'check',
  info: 'info-circle',
  danger: 'ban'
};

const Alert = (props) => {
  const classes = classnames(
    'alert', `alert-${props.color}`,
    { 'alert-dismissible': props.dismissible }
  );

  return (
    <div className={classes} role="alert">
      {props.dismissible ?
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        : null }
      {props.icon ? <Icon name={iconMap[props.color]} className="pull-xs-left m-r-1" style={{ lineHeight: 'inherit' }}/> : null}
      {props.icon ? <div style={{ overflow: 'hidden' }}>{props.children}</div> : props.children}
    </div>
  );
}

Alert.propTypes = {
  color: React.PropTypes.string
};

Alert.defaultProps = {
  color: 'warning'
};

export default Alert;
