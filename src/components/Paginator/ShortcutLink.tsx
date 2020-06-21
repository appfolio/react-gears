import React from 'react';
import PropTypes from 'prop-types';
import PaginationItem from '../PaginationItem';
import PaginationLink from '../PaginationLink';

type ShortcutLinkProps = {
  children?: React.ReactNode,
  disabled?: boolean,
  onClick: (page: number) => void,
  page: number,
  name?: string,
}

/**
 * A clickable link to the first/previous/next/last page in the pagination bar
 */
export default class ShortcutLink extends React.Component<ShortcutLinkProps, {}> {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    name: PropTypes.string,
  };

  onClick = (event: React.MouseEvent) => {
    event.preventDefault();
    this.props.onClick(this.props.page);
  };

  render() {
    const { children, disabled } = this.props;

    return (
      <PaginationItem disabled={disabled}>
        <PaginationLink onClick={this.onClick} tabIndex={disabled ? -1 : undefined}>
          {children}
        </PaginationLink>
      </PaginationItem>
    );
  }
}
