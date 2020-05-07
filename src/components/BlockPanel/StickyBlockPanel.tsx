import React, { useEffect } from 'react';
import BasicBlockPanel, { BasicBlockPanelProps } from './BlockPanel';
import useLocalStorage from '../../hooks/useLocalStorage';

export interface StickyBlockPanelProps extends BasicBlockPanelProps {
  id: string,
}

const StickyBlockPanel = ({ open, id, expandable, ...props }: StickyBlockPanelProps) => {
  const [isOpen, setIsOpen] = useLocalStorage(`BlockPanel-open-${id}`, open);

  useEffect(() => {
    if (open) setIsOpen(open);
  }, [open, setIsOpen]);

  return (
    <BasicBlockPanel
      {...props}
      expandable
      open={isOpen}
      onToggle={value => setIsOpen(value)}
    />
  );
};

export default StickyBlockPanel;
