import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import Collapse from './Collapse';
import ClickableContainer from './ClickableContainer';
import Icon from './Icon';

const ExpandableSection = ({ children, className, onToggle, open, title }) => {
  const [isOpen, toggle] = useState(open);

  useCallback(() => {
    console.log('rstrstrstrst', isOpen)
    onToggle(isOpen)
  }, [isOpen]);
  useEffect(() => toggle(open), [open]);

  return (
    <section className={className}>
      <ClickableContainer tag="header" onClick={() => toggle(!isOpen)}>
        <Icon
          name='caret-right'
          rotate={isOpen ? 90 : undefined}
          size="lg"
          fixedWidth
          style={{ transition: 'transform 200ms ease-in-out' }}
        />
        <b style={{ userSelect: 'none' }}>{title}</b>
      </ClickableContainer>
      <Collapse isOpen={isOpen}>
        <div className="py-3">
          {children}
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
  open: false,
  onToggle: () => {}
};

export default ExpandableSection;
