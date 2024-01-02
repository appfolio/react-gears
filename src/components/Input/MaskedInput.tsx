import React, { FC } from 'react';
import MaskedInputBase, { MaskedInputProps as RTMaskedInputProps } from 'react-text-mask';

interface MaskedInputProps extends RTMaskedInputProps {
  'data-testid'?: string;
}

const MaskedInput: FC<MaskedInputProps> = ({ guide = false, ...props }) => {
  if (props && !props['data-testid']) {
    props['data-testid'] = 'react-gears-maskedinput';
  }
  return <MaskedInputBase className="form-control" guide={guide} {...props} />;
};
export default MaskedInput;
