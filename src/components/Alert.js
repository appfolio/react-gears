import PropTypes from 'prop-types';
import React from 'react';
import AlertComponent from 'reactstrap/lib/Alert';
import Icon from './Icon';

const ICON_MAP = {
  warning: 'exclamation-circle',
  success: 'check',
  info: 'info-circle',
  danger: 'ban'
};

export default class Alert extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    dismissible: PropTypes.bool,
    icon: PropTypes.bool,
    className: PropTypes.string,
    onToggle: PropTypes.func
  }

  static defaultProps = {
    className: '',
    color: 'warning',
    dismissible: false,
    icon: false,
    onToggle: null
  }

  static displayName = 'Alert';

  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };
  }

  toggle = () => {
    const visible = !this.state.visible;
    this.setState({ visible });
    if (this.props.onToggle) this.props.onToggle(visible);
  }

  componentWillReceiveProps() {
    this.setState({ visible: true });
  }

  render() {
    const { color, children, className, dismissible, icon, ...props } = this.props;

    return (
      <AlertComponent
        color={color}
        isOpen={this.state.visible}
        toggle={dismissible ? this.toggle : null}
        className={className}
        {...props}
      >
        <div className="d-flex align-items-start">
          {icon ? <Icon name={ICON_MAP[color]} size="lg" className="mr-3 mt-1" /> : null}
          {icon ? <div style={{ overflow: 'hidden' }}>{children}</div> : <div>{children}</div>}
        </div>
      </AlertComponent>
    );
  }
}
