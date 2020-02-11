import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
import InnerTooltip from 'reactstrap/lib/Tooltip';


const Tooltip = ({ isOpen, ...props }) => {
  const [isOpenState, setIsOpenState] = useState(isOpen); 

  const toggleIsOpenState = useCallback(() => { console.log('toggleIsOpenState'); setIsOpenState(!isOpenState); }, [setIsOpenState, isOpenState]); 

  return (
    <InnerTooltip
      isOpen={isOpenState}
      toggle={toggleIsOpenState}
      {...props}
    />
  );
};

Tooltip.propTypes = {
  ...InnerTooltip.propTypes,
  isOpen: PropTypes.bool
};

Tooltip.defaultProps = {
  ...InnerTooltip.defaultProps,
  isOpen: false,
  fade: false,
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
