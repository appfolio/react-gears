import PropTypes from 'prop-types';
import React from 'react';
import Collapse from './Collapse';
import ClickableContainer from './ClickableContainer';
import Icon from './Icon';

class ExpandableSection extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onToggle: PropTypes.func,
    open: PropTypes.bool,
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    className: '',
    open: false,
    onToggle: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    };
  }

  toggle = () => {
    const open = !this.state.open;
    this.setState({ open: !this.state.open }, () => this.props.onToggle(open));
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      if (nextProps.open) {
        this.setState({ open: true });
      } else {
        this.setState({ open: false });
      }
    }
  }

  render() {
    return (
      <section className={this.props.className}>
        <ClickableContainer tag="header" onClick={this.toggle}>
          <Icon
            name='caret-right'
            rotate={this.state.open ? 90 : undefined}
            size="lg"
            fixedWidth
            style={{ transition: 'transform 200ms ease-in-out' }}
          />
          <b style={{ userSelect: 'none' }}>{this.props.title}</b>
        </ClickableContainer>
        <Collapse isOpen={this.state.open}>
          <div className="py-3">
            {this.props.children}
          </div>
        </Collapse>
      </section>
    );
  }
}

export default ExpandableSection;
