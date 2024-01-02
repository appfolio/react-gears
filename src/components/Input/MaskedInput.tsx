import React, { FC } from 'react';
import MaskedInputBase, { MaskedInputProps as RTMaskedInputProps } from 'react-text-mask';

export interface MaskedInputProps extends RTMaskedInputProps {
  'data-testid': string;
}

const MaskedInput: FC<MaskedInputProps> = ({
  guide = false,
  'data-testid': dataTestId,
  ...props
}) => {
  dataTestId = dataTestId || 'react-gears-masked-input';

  return (
    <MaskedInputBase className="form-control" guide={guide} data-testid={dataTestId} {...props} />
  );
};

export default MaskedInput;
