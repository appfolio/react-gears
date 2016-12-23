import React, { Component } from 'react';
import { PaginationItem, PaginationLink } from '../../';

/**
 * A clickable link to the first/previous/next/last page in the pagination bar
 */
export default class ShortcutLink extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    name: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    page: React.PropTypes.number.isRequired,
  }

  onClick = event => {
    event.preventDefault();
    this.props.onClick(this.props.page);
  }

  render() {
    const { children, name } = this.props;

    return (
      <PaginationItem>
        <PaginationLink onClick={this.onClick}>
          {children}
        </PaginationLink>
      </PaginationItem>
    );
  }
}
