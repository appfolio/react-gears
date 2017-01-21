import React, { Component } from 'react';
import { Icon } from '../';

import styles from './ExpandableSection.scss';

class ExpandableSection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    };
  }

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const className = `${styles.expandableSection} ${this.props.className}`;

    // TODO use reactstrap <Collapse /> component below - resolve animation issue first.
    return (
      <section className={className}>
        <header onClick={this.toggle} style={{ cursor: 'pointer' }}>
          <Icon
            name='caret-right'
            rotate={this.state.open ? 90 : undefined}
            size="lg"
            fixedWidth
            style={{ transition: 'transform 200ms ease-in-out' }}
          />
          <b style={{ userSelect: 'none' }}>{this.props.title}</b>
        </header>
        {this.state.open ? <section>{this.props.children}</section> : null}
      </section>
    );
  }
}

ExpandableSection.propTypes = {
  open: React.PropTypes.bool,
  title: React.PropTypes.string.isRequired
};

ExpandableSection.defaultProps = {
  open: false
};

export default ExpandableSection;
