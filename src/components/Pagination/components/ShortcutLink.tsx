import PropTypes from 'prop-types';
import React from 'react';
import PaginationItem from '../PaginationItem';
import PaginationLink from '../PaginationLink';

type ShortcutLinkProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick: (page: number) => void;
  page: number;
  name?: string;
};

/**
 * A clickable link to the first/previous/next/last page in the pagination bar
 */
const ShortcutLink: React.FunctionComponent<ShortcutLinkProps> = ({
  page,
  children,
  disabled,
  ...props
}) => {
  const onClick = (event: React.MouseEvent) => {
    event.preventDefault();
    props.onClick(page);
  };

  return (
    <PaginationItem disabled={disabled}>
      <PaginationLink onClick={onClick} tabIndex={disabled ? -1 : undefined}>
        {children}
      </PaginationLink>
    </PaginationItem>
  );
};

ShortcutLink.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  name: PropTypes.string,
};

ShortcutLink.displayName = 'ShortcutLink';

export default ShortcutLink;
