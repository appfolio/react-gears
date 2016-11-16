import Icon from 'react-fontawesome';
import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import styles from './ExpandableSection.scss';

@observer
class ExpandableSection extends Component {

  @observable open = this.props.open;

  toggle = () => this.open = !this.open;

  render() {
    const className = `${styles.expandableSection} ${this.props.className}`;

    // TODO use reactstrap <Collapse /> component below - resolve animation issue first.
    return (
      <section className={className}>
        <header onClick={this.toggle} style={{ cursor: 'pointer' }}>
          <Icon
            name='caret-right'
            rotate={this.open ? 90 : undefined}
            fixedWidth
            style={{ transition: 'transform 200ms ease-in-out' }}
          />
          <b style={{ userSelect: 'none' }}>{this.props.title}</b>
          <hr />
        </header>
        {this.open ? <section>{this.props.children}</section> : null}
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
