import React, { FC } from 'react';
import MaskedInputBase, { MaskedInputProps } from 'react-text-mask';

const MaskedInput: FC<MaskedInputProps> = ({ guide = false, ...props }) => (
  <MaskedInputBase className="form-control" guide={guide} {...props} />
);

export default MaskedInput;
