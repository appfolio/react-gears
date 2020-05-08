import React, { useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import BasicBlockPanel, { BasicBlockPanelProps } from './BlockPanel';

export interface StickyBlockPanelProps extends BasicBlockPanelProps {
  id: string,
}

const StickyBlockPanel = ({ open, id, expandable, ...props }: StickyBlockPanelProps) => {
  const [isOpen, setIsOpen] = useLocalStorageState(`BlockPanel-open-${id}`, open);

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
