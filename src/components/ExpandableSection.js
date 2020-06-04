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
        <ClickableContainer aria-expanded={open} className="d-flex align-items-center" onClick={toggle}>
          <Icon
            name={`chevron-${open ? 'up' : 'down'}`}
            className="text-muted mr-1"
            fixedWidth
            style={{ transition: 'transform 200ms ease-in-out' }}
          />
          <h3 className="m-0 d-inline">{props.title}</h3>
          <style jsx>{`
            h3 {
              -webkit-touch-callout: none;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
          `}
          </style>
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
  title: PropTypes.node.isRequired
};

ExpandableSection.defaultProps = {
  className: '',
  open: false,
  onToggle: () => {}
};

export default ExpandableSection;
