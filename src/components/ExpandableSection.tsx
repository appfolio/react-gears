import React, { useState, useEffect, FunctionComponent } from 'react';
import Collapse from './Collapse';
import ClickableContainer from './ClickableContainer';
import Icon from './Icon';

interface ExpandableSectionProps {
  children?: React.ReactNode;
  className?: string;
  onToggle?: (open: boolean) => void;
  open?: boolean;
  title: React.ReactNode;
}

const ExpandableSection: FunctionComponent<ExpandableSectionProps> = ({
  children,
  className,
  onToggle = () => {},
  open: defaultOpen,
  title
}) => {
  const [open, setOpen] = useState(defaultOpen);
  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  const toggle = () => {
    setOpen(!open);
    onToggle(!open);
  };

  return (
    <section className={className}>
      <header>
        <ClickableContainer aria-expanded={open} className="d-flex align-items-center w-100" onClick={toggle}>
          <Icon
            name={`chevron-${open ? 'up' : 'down'}`}
            className="text-muted me-1"
            fixedWidth
            style={{ transition: 'transform 200ms ease-in-out' }}
          />
          {title}
          <style jsx>{`
            b {
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
          {children}
        </div>
      </Collapse>
    </section>
  );
};

ExpandableSection.defaultProps = {
  className: '',
  open: false,
  onToggle: () => {}
};

ExpandableSection.displayName = 'ExpandableSection';

export default ExpandableSection;
