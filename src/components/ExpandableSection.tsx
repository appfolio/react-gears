import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Collapse from './Collapse';
import ClickableContainer from './ClickableContainer';
import Icon from './Icon';

const ExpandableSection = (props) => {
  const [open, setOpen] = useState(props.open);
  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const toggle = () => {
    setOpen(!open);
    props.onToggle(!open);
  };

  return (
    <section className={props.className}>
      <header>
        <ClickableContainer aria-expanded={open} onClick={toggle}>
          <Icon
            name="caret-right"
            rotate={open ? 90 : undefined}
            size="lg"
            fixedWidth
            style={{ transition: 'transform 200ms ease-in-out' }}
          />
          <b style={{ userSelect: 'none' }}>{props.title}</b>
        </ClickableContainer>
      </header>
      <Collapse isOpen={open}>
        <div className="py-3">
          {props.children}
        </div>
      </Collapse>
    </section>
  );
};

ExpandableSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired
};

ExpandableSection.defaultProps = {
  className: '',
  open: false,
  onToggle: () => {}
};

export default ExpandableSection;
