import React from 'react';
import PropTypes from 'prop-types';
import PaginationItem from '../PaginationItem';
import PaginationLink from '../PaginationLink';

/**
 * A clickable link to the first/previous/next/last page in the pagination bar
 */
export default class ShortcutLink extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
  }

  onClick = (event) => {
    event.preventDefault();
    this.props.onClick(this.props.page);
  }

  render() {
    const { children, disabled } = this.props;

    return (
      <PaginationItem disabled={disabled}>
        <PaginationLink onClick={this.onClick} tabIndex={disabled ? -1 : null}>
          {children}
        </PaginationLink>
      </PaginationItem>
    );
  }
}
