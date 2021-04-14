import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { MaskedInput } from '../src';

export default {
  title: 'MaskedInput',
  component: MaskedInput,
};

const imaskLink = <a href="https://imask.js.org/">imask.js</a>;
const reactTextMaskLink = <a href="https://text-mask.github.io/text-mask/">react-text-mask</a>;

export const Introduction = () => (
  <section>
    <p>
      <code>MaskedInput</code> is a react component that uses {imaskLink} masking under the hood.{' '}
      All <code>imask</code> options can be passed to the <code>MaskedInput</code> components via props.{' '}
      React Gears 6 and earlier versions used {reactTextMaskLink}, but we migrated to{' '}
      {imaskLink} since {reactTextMaskLink} is no longer maintained.
    </p>

    <p>Please review the <a href="https://imask.js.org/guide.html">imask.js guide</a> for detailed documentation.</p>
  </section>
);

export const PhoneNumber = () => (
  <MaskedInput
    mask="(000)000-0000"
    lazy={boolean('lazy', true)}
    placeholder={text('placeholder', '(555) 495-3947')}
    placeholderChar={text('placeholderChar', '0')}
  />
);
