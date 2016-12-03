import React from 'react';
import { Icon } from '../';
import { Alert } from 'reactstrap';

const ICON_MAP = {
  warning: 'bullhorn',
  success: 'check',
  info: 'info-circle',
  danger: 'ban'
};

export default class AlertComponent extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    color: React.PropTypes.string,
    dismissible: React.PropTypes.bool,
    icon: React.PropTypes.bool
  }

  static defaultProps = {
    color: 'warning',
    dismissible: false,
    icon: false
  }

  static displayName = 'Alert'

  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };
  }

  componentWillReceiveProps() {
    this.setState({ visible: true });
  }

  toggle = () => {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { color, children, dismissible, icon } = this.props;

    return (
      <Alert color={color} isOpen={this.state.visible} toggle={dismissible ? this.toggle : null}>
        {icon ? <Icon name={ICON_MAP[color]} className="float-left mr-2" style={{ lineHeight: 'inherit' }} /> : null}
        {icon ? <div style={{ overflow: 'hidden' }}>{children}</div> : children}
      </Alert>
    );
  }
}
