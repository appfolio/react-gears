import React, { FC } from 'react';
import { Popover as PopoverInternal, PopoverProps } from 'reactstrap';

// ref
const Popover: FC<PopoverProps> = ({ fade = false, trigger = 'legacy', ...props }) => (
  <PopoverInternal fade={fade} trigger={trigger} {...props} />
);

Popover.displayName = 'Popover';

export default Popover;
