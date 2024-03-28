import React, { FC, useCallback, useState } from 'react';
import Confetti from 'react-confetti';

export interface ConfettiProps {
    fullWidth?: boolean;
}

const ConfettiDropper: FC<ConfettiProps> = ({
  fullWidth = true,
  ...props
}) => {
  props = {
    ...(fullWidth && { style: { position: 'fixed' }, height: window.innerHeight }),
    ...props
  }
  const [width, setWidth] = useState(0);

  const div = useCallback((node) => {
    if (node !== null) {
      // set width to width of div or screen
        setWidth(fullWidth ? window.innerWidth : node.getBoundingClientRect().width);
    }
  }, [fullWidth]);
  return (
    <div ref={div}>
        <Confetti {...props} width={width} />
    </div>
  );
};

export default ConfettiDropper;
