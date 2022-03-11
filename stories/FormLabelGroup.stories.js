import React from 'react';
import { boolean, object, text, select } from '@storybook/addon-knobs';
import { Alert, FormLabelGroup, FormGroup, Input, Label } from '../src';

export default {
  title: 'FormLabelGroup',
  component: FormLabelGroup,
};

export const LiveExample = () => (
  <div>
    <FormLabelGroup
      label={text('label', 'Some Input')}
      labelSize={select('labelSize', ['sm', 'md', 'lg'], 'md')}
      feedback={text('feedback', 'You must give a first name')}
      validFeedback={text('validFeedback')}
      hint={text('hint', '')}
      width={object('width', {})}
      required={boolean('required', false)}
      inline={boolean('inline', false)}
      stacked={boolean('stacked', false)}
    >
      <Alert color="info" className="text-center p-4 mb-0" style={{ borderStyle: 'dashed' }}>
        Your content here
      </Alert>
    </FormLabelGroup>
  </div>
);

export const RadioExample = () => (
  <FormLabelGroup
    label="Transaction Method"
    stacked
  >
    <FormGroup check>
      <Input
        type="radio"
        id="onlineTransfer"
        name="transactionMethod"
      />
      <Label check>I will be transferring money between banks online</Label>
    </FormGroup>
    <FormGroup check>
      <Input
        type="radio"
        id="bcrd"
        name="transactionMethod"
      />
      <Label check>I will be transferring money between banks with a check</Label>
    </FormGroup>
  </FormLabelGroup>
);

