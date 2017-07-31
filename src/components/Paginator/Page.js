import React, { Component } from 'react';
import { PaginationItem, PaginationLink } from '../../';

/**
 * A clickable link to a page in the pagination bar
 */
export default class Page extends Component {
  static displayName = 'Page';

  static propTypes = {
    current: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired,
    page: React.PropTypes.number.isRequired,
  }

  onClick = event => {
    event.preventDefault();
    this.props.onClick(this.props.page);
  }

  render() {
    const { current, page } = this.props;

    return (
      <PaginationItem active={current}>
        <PaginationLink onClick={this.onClick}>{page}</PaginationLink>
      </PaginationItem>
    );
  }
}
