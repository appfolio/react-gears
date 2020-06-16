import React, { useState, useEffect, FunctionComponent } from 'react';
import Collapse from './Collapse';
import ClickableContainer from './ClickableContainer';
import Icon from './Icon';

interface ExpandableSectionProps {
  children?: React.ReactNode;
  className?: string;
  onToggle: (open: boolean) => void;
  open?: boolean;
  title: string;
}

const ExpandableSection: FunctionComponent<ExpandableSectionProps> = ({
  children,
  className,
  onToggle,
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
        <ClickableContainer aria-expanded={open} onClick={toggle}>
          <Icon
            name="caret-right"
            rotate={open ? 90 : undefined}
            size="lg"
            fixedWidth
            style={{ transition: 'transform 200ms ease-in-out' }}
          />
          <b style={{ userSelect: 'none' }}>{title}</b>
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

export default ExpandableSection;
