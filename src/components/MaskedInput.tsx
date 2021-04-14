import React from 'react';
import { IMaskInput, IMaskInputProps } from 'react-imask';
// eslint-disable-next-line import/no-unresolved
import './TypeHelpers/react-imask.d.ts';

const MaskedInput: React.FunctionComponent<IMaskInputProps> = (
  props: IMaskInputProps
) => (
  <IMaskInput className="form-control" {...props} />
);

export default MaskedInput;
