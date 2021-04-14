import React from 'react';
import { IMaskInput, IMaskInputProps } from 'react-imask';
import classnames from 'classnames';
import IMask from 'imask';

function MaskedInput<MaskOptions extends IMask.AnyMaskedOptions>({ className: classes, ...props }: IMaskInputProps<MaskOptions>) {
  const className = classnames('form-control', classes);
  const maskProps = { className, ...props };
  return (
    // @ts-ignore
    <IMaskInput {...maskProps} />
  );
}

export default MaskedInput;
