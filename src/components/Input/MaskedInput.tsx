import React, { type FC } from 'react';
import MaskedInputBase, { type MaskedInputProps } from 'react-text-mask';

const MaskedInput: FC<MaskedInputProps> = ({ guide = false, ...props }) => (
  <MaskedInputBase className="form-control" guide={guide} {...props} />
);

export default MaskedInput;
