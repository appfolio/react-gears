import React, { type FC } from 'react';
import { Popover as PopoverInternal, type PopoverProps } from 'reactstrap';

const Popover: FC<PopoverProps> = ({ fade = false, trigger = 'legacy', ...props }) => (
  <PopoverInternal fade={fade} trigger={trigger} {...props} />
);

Popover.displayName = 'Popover';

export default Popover;
