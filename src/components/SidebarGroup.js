import PropTypes from 'prop-types';
import React from 'react';

export default class SidebarGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    icon: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    return (
      <div className="tasks-group">
        <h2 className="tasks-group__heading">
          <span className={`icon icon-${this.props.icon}`} />
          {' '}{this.props.title}
        </h2>
        <ul className="tasks-group__list">
          {this.props.children}
        </ul>
      </div>
    );
  }
}
