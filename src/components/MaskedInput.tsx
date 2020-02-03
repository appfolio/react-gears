import React from 'react';
import MaskedInputBase, { MaskedInputProps } from 'react-text-mask';

const MaskedInput = ({ guide = false, ...props }: MaskedInputProps) => (
  <MaskedInputBase className="form-control" guide={guide} {...props} />
);

export default MaskedInput;
