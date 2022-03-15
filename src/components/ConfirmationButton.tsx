import noop from 'lodash.noop';
import type { FC, MouseEventHandler } from 'react';
import React, { useCallback, useState } from 'react';
import type { ButtonProps } from './Button';
import Button from './Button';

export interface ConfirmationButtonProps extends ButtonProps {
  confirmation?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const defaultProps = { onClick: noop };

const ConfirmationButton: FC<ConfirmationButtonProps> = ({
  children,
  confirmation,
  onClick = defaultProps.onClick,
  ...props
}) => {
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const handleClick = useCallback(
    (e) => {
      if (confirmationVisible) {
        onClick(e);
      }
      setConfirmationVisible(!confirmationVisible);
    },
    [confirmationVisible, onClick]
  );

  return (
    <Button onBlur={() => setConfirmationVisible(false)} onClick={handleClick} {...props}>
      {confirmationVisible ? confirmation : children}
    </Button>
  );
};

export default ConfirmationButton;
