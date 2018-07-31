import PropTypes from 'prop-types';
import React from 'react';
import Collapse from './Collapse';
import Icon from './Icon';

class ExpandableSection extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    open: PropTypes.bool,
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    className: '',
    open: false
  };

  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    };
  }

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <section className={this.props.className}>
        <header onClick={this.toggle} role="button">
          <Icon
            name='caret-right'
            rotate={this.state.open ? 90 : undefined}
            size="lg"
            fixedWidth
            style={{ transition: 'transform 200ms ease-in-out' }}
          />
          <b style={{ userSelect: 'none' }}>{this.props.title}</b>
        </header>
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
