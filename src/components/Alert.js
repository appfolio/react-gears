import React from 'react';
import Icon from 'react-fontawesome';
import { Alert } from 'reactstrap';

const iconMap = {
  warning: 'bullhorn',
  success: 'check',
  info: 'info-circle',
  danger: 'ban'
};

class AlertComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };
  }

  toggle() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { color, children, dismissible, icon } = this.props;

    return (
      <Alert color={color} isOpen={this.state.visible} toggle={dismissible ? this.toggle : null}>
        {icon ? <Icon name={iconMap[color]} className="pull-xs-left m-r-1" style={{ lineHeight: 'inherit' }} /> : null}
        {icon ? <div style={{ overflow: 'hidden' }}>{children}</div> : children}
      </Alert>
    );
  }
}

AlertComponent.propTypes = {
  color: React.PropTypes.string,
  dismissible: React.PropTypes.bool,
  icon: React.PropTypes.bool
};

AlertComponent.defaultProps = {
  color: 'warning',
  dismissible: false,
  icon: false
};

export default AlertComponent;
