import React, { useRef, useState, SyntheticEvent } from 'react';
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

let count = 0;

function getID() {
  return `help-bubble-${count++}`;
}

const style = {
  cursor: 'pointer',
};

function HelpBubble(props: HelpBubbleProps) {
  const idRef = useRef<string | undefined>();
  if (!idRef.current) {
    idRef.current = getID();
  }
  const id = idRef.current;

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
