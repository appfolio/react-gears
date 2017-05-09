import React from 'react';
import { Icon } from '../';
import { Alert } from 'reactstrap';

const ICON_MAP = {
  warning: 'exclamation-circle',
  success: 'check',
  info: 'info-circle',
  danger: 'ban'
};

export default class AlertComponent extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    color: React.PropTypes.string,
    dismissible: React.PropTypes.bool,
    icon: React.PropTypes.bool,
    className: React.PropTypes.string
  }

  static defaultProps = {
    color: 'warning',
    dismissible: false,
    icon: false
  }

  static displayName = 'Alert';

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
    const { color, children, className, dismissible, icon } = this.props;

    return (
      <Alert
        color={color}
        isOpen={this.state.visible}
        toggle={dismissible ? this.toggle : null}
        className={className}
      >
        <div className="d-flex align-items-start">
          {icon ? <Icon name={ICON_MAP[color]} size="lg" className="mr-3 mt-1" /> : null}
          {icon ? <div ref="wrapper" style={{ overflow: 'hidden' }}>{children}</div> : <div>{children}</div>}
        </div>
      </Alert>
    );
  }
}
