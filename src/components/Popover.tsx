import React from 'react';
import Popover from 'reactstrap/lib/Popover';
import type { PopoverProps } from 'reactstrap';

const PopoverWrapper = ({ fade = false, trigger = 'legacy', ...props }: PopoverProps) => (
  <Popover fade={fade} trigger={trigger} {...props} />
);

export default PopoverWrapper;
