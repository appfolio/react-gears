import type { FC } from 'react';
import React from 'react';
import type { PopoverHeaderProps } from 'reactstrap';
import { PopoverHeader as InternalPopoverHeader } from 'reactstrap';

const PopoverHeader: FC<PopoverHeaderProps> = ({ tag = 'h4', ...props }) => (
  <InternalPopoverHeader tag={tag} {...props} />
);

export default PopoverHeader;
