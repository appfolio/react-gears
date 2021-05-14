import React from 'react';
import Popover from 'reactstrap/lib/Popover';
import type { PopoverProps } from 'reactstrap';

export default function ({ fade = false, trigger = 'legacy', ...props}: PopoverProps) {
  return <Popover fade={fade} trigger={trigger} {...props} />;
}
