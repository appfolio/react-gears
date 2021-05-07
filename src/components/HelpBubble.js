import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import Icon from './Icon';
import Popover from './Popover';
import PopoverBody from './PopoverBody';
import PopoverHeader from './PopoverHeader';

let count = 0;

function getID() {
  return `help-bubble-${count++}`; // eslint-disable-line no-plusplus
}

const style = {
  cursor: 'pointer',
};

function HelpBubble(props) {
  const idRef = useRef();
  if (!idRef.current) idRef.current = getID();
  const id = idRef.current;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e) => {
    e.stopPropagation();
    setIsOpen(prevIsOpen => !prevIsOpen);
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
        <PopoverHeader>{title}</PopoverHeader>
        <PopoverBody>{children}</PopoverBody>
      </Popover>
    </span>
  );
}

HelpBubble.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  className: PropTypes.any,
};

export default HelpBubble;
