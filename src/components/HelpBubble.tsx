import React, { SyntheticEvent, useRef, useState } from 'react';
import Icon from './Icon';
import Popover from './Popover';
import PopoverBody from './PopoverBody';
import PopoverHeader from './PopoverHeader';

interface HelpBubbleProps
  extends Omit<
    React.ComponentProps<typeof Popover>,
    'isOpen' | 'toggle' | 'target'
  > {
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

let count = 0;

function getID() {
  return `help-bubble-${count++}`; // eslint-disable-line no-plusplus
}

const style = {
  cursor: 'pointer',
};

function HelpBubble(props: HelpBubbleProps) {
  const idRef = useRef<string | undefined>();
  if (!idRef.current) idRef.current = getID();
  const id = idRef.current;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e: SyntheticEvent) => {
    e.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // TODO: remove close and set Popover.toggle to this.toggle once we bump to reactstrap v5
  // Fixes https://github.com/reactstrap/reactstrap/issues/465
  const close = () => {
    setTimeout(() => {
      setIsOpen(false);
    });
  };

  const { title, children, className, ...other } = props;

  return (
    <span className={className} style={style}>
      <Icon
        name="question-circle"
        onClick={toggle}
        id={id}
        className="text-primary"
      />
      <Popover isOpen={isOpen} toggle={close} target={id} {...other}>
        {title && <PopoverHeader>{title}</PopoverHeader>}
        <PopoverBody>{children}</PopoverBody>
      </Popover>
    </span>
  );
}

export default HelpBubble;
