import React, { useState, SyntheticEvent } from 'react';
import { useUniqueId } from '../../util/uniqueId';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Popover from '../Popover/Popover';
import PopoverBody from '../Popover/PopoverBody';
import PopoverHeader from '../Popover/PopoverHeader';

interface HelpBubbleProps
  extends Omit<React.ComponentProps<typeof Popover>, 'isOpen' | 'toggle' | 'target'> {
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const style = {
  cursor: 'pointer',
};

function HelpBubble(props: HelpBubbleProps) {
  const id = useUniqueId('help-bubble-');
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e: SyntheticEvent) => {
    e.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const { title, children, className, ...other } = props;

  return (
    <span className={className} style={style}>
      <Button color="link" className="p-0" aria-label="More Info" onClick={toggle}>
        <Icon name="circle-question" id={id} className="text-primary" />
      </Button>
      <Popover isOpen={isOpen} toggle={toggle} target={id} {...other}>
        <div aria-live="polite">
          {title && <PopoverHeader>{title}</PopoverHeader>}
          <PopoverBody>{children}</PopoverBody>
        </div>
      </Popover>
    </span>
  );
}

export default HelpBubble;
