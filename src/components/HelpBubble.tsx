import type { SyntheticEvent } from 'react';
import React, { useRef, useState } from 'react';
import Button from './Button';
import Icon from './Icon';
import Popover from './Popover';
import PopoverBody from './PopoverBody';
import PopoverHeader from './PopoverHeader';

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
        <Icon name="question-circle" id={id} className="text-primary" />
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
