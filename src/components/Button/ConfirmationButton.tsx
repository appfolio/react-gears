import noop from 'lodash.noop';
import React, { useCallback, useState, FC, MouseEventHandler } from 'react';
import Button, { ButtonProps } from './Button';

export interface ConfirmationButtonProps extends ButtonProps {
  confirmation?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const defaultProps = { onClick: noop };

// Pass in ref here
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
