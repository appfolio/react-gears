import React from 'react';
import Alert from '../Alert/Alert';
import Input from '../Input/Input';
import Label from '../Label/Label';
import FormGroup from './FormGroup';
import FormLabelGroup from './FormLabelGroup';

export default {
  title: 'FormLabelGroup',
  component: FormLabelGroup,
  parameters: {
    sourceLink: 'Form/FormLabelGroup.tsx',
  },
};

export const LiveExample = (args) => (
  <div>
    <FormLabelGroup {...args}>
      <Alert color="info" className="text-center p-4 mb-0" style={{ borderStyle: 'dashed' }}>
        Your content here
      </Alert>
    </FormLabelGroup>
  </div>
);
LiveExample.args = {
  label: 'Some Input',
  labelSize: 'md',
  feedback: 'You must give a first name',
  validFeedback: undefined,
  hint: '',
  width: {},
  required: false,
  inline: false,
  stacked: false,
};
LiveExample.argTypes = {
  labelSize: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg'],
  },
};

export const RadioExample = (args) => (
  <FormLabelGroup label="Transaction Method" stacked {...args}>
    <FormGroup check>
      <Input type="radio" id="onlineTransfer" name="transactionMethod" />
      <Label check>I will be transferring money between banks online</Label>
    </FormGroup>
    <FormGroup check>
      <Input type="radio" id="bcrd" name="transactionMethod" />
      <Label check>I will be transferring money between banks with a check</Label>
    </FormGroup>
  </FormLabelGroup>
);
