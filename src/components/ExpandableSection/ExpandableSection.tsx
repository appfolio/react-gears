import React, { useState, useEffect, FC } from 'react';
import ClickableContainer from '../ClickableContainer/ClickableContainer';
import Collapse from '../Collapse/Collapse';
import Icon from '../Icon/Icon';

interface ExpandableSectionProps {
  children?: React.ReactNode;
  className?: string;
  onToggle?: (open: boolean) => void;
  open?: boolean;
  title: React.ReactNode;
  rightChevron?: boolean;
}

const ExpandableSection: FC<ExpandableSectionProps> = ({
  children,
  className,
  onToggle = () => {},
  open: defaultOpen,
  title,
  rightChevron = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  const toggle = () => {
    setOpen(!open);
    onToggle(!open);
  };

  const iconProps = {
    name: `chevron-${open ? 'up' : 'down'}`,
    className: `text-muted ${rightChevron ? 'ms-1' : 'me-1'}`,
    style: { transition: 'transform 200ms ease-in-out' },
  };

  return (
    <section className={className}>
      <header>
        <ClickableContainer
          aria-expanded={open}
          className="d-flex align-items-center w-100"
          onClick={toggle}
        >
          {rightChevron && title}
          <Icon {...iconProps} fixedWidth />
          {!rightChevron && title}
          <style jsx>
            {`
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
        <div className="py-3">{children}</div>
      </Collapse>
    </section>
  );
};

ExpandableSection.defaultProps = {
  className: '',
  open: false,
  onToggle: () => {},
};

ExpandableSection.displayName = 'ExpandableSection';

export default ExpandableSection;
