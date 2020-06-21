// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import PaginationItem from '../PaginationItem';
import PaginationLink from '../PaginationLink';

/**
 * A clickable link to a page in the pagination bar
 */
export default class Page extends React.Component {
  static propTypes = {
    current: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
  }

  onClick = (event) => {
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
