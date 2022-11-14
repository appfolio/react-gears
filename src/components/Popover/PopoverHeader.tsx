import React, { FC } from 'react';
import { PopoverHeaderProps, PopoverHeader as InternalPopoverHeader } from 'reactstrap';

// ref
const PopoverHeader: FC<PopoverHeaderProps> = ({ tag = 'h4', ...props }) => (
  <InternalPopoverHeader tag={tag} {...props} />
);

export default PopoverHeader;
