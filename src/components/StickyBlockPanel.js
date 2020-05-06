import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BlockPanel from './BlockPanel';
import useLocalStorage from '../hooks/useLocalStorage';

const StickyBlockPanel = ({ open, id, expandable, ...props }) => {
  const [isOpen, setIsOpen] = useLocalStorage(`BlockPanel-open-${id}`, open);

  useEffect(() => {
    if (open) setIsOpen(open);
  }, [open, setIsOpen]);

  return (
    <BlockPanel
      {...props}
      expandable
      open={isOpen}
      onToggle={value => setIsOpen(value)}
    />
  );
};

StickyBlockPanel.propTypes = {
  id: PropTypes.string.isRequired,
  ...BlockPanel.propTypes
};

export default StickyBlockPanel;
