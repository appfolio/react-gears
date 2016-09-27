import React from 'react';
import Icon from 'react-fontawesome';

const iconMap = {
  warning: 'bullhorn',
  success: 'check',
  info: 'info-circle',
  danger: 'ban'
};

const Alert = (props) => (
  <div className={['alert', `alert-${props.color}`].join(' ')} role="alert">
    {props.icon ? <Icon name={iconMap[props.color]} className="pull-xs-left m-r-1" style={{ lineHeight: 'inherit' }}/> : null}
    {props.icon ? <div style={{ overflow: 'hidden' }}>{props.children}</div> : props.children}
  </div>
);

Alert.propTypes = {
  color: React.PropTypes.string
};

Alert.defaultProps = {
  color: 'warning'
};

export default Alert;
