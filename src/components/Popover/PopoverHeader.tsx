import React, { type FC } from 'react';
import { type PopoverHeaderProps, PopoverHeader as InternalPopoverHeader } from 'reactstrap';

const PopoverHeader: FC<PopoverHeaderProps> = ({ tag = 'h4', ...props }) => (
  <InternalPopoverHeader tag={tag} {...props} />
);

export default PopoverHeader;
