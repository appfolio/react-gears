import React from 'react';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import Datapair from './Datapair';

export default {
  title: 'Datapair',
  component: Datapair,
  parameters: {
    sourceLink: 'Datapair/Datapair.tsx',
  },
};

export const WithProps = ({ stacked, labelSize, label, value, feedback, hint }) => (
  <Card className="mt-1">
    <CardBody>
      <Datapair
        label={label}
        value={value}
        labelSize={labelSize}
        feedback={feedback}
        hint={hint}
        stacked={stacked}
      />
      <Datapair label="Another Key" value="More content" labelSize={labelSize} stacked={stacked} />
    </CardBody>
  </Card>
);
WithProps.args = {
  stacked: false,
  labelSize: 'md',
  label: 'Key',
  value: 'Some simple content would go here',
  feedback: undefined,
  hint: '',
};
WithProps.argTypes = {
  labelSize: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'select' },
  },
};

export const WithHTMLValue = (args) => (
  <Card className="mt-1">
    <CardBody>
      <Datapair label="Label" {...args}>
        Custom markup <Button color="primary">can go here</Button>
      </Datapair>
      <Datapair
        label="This is a really long label that probably shouldn't be this long"
        value="Stuff"
      />
    </CardBody>
  </Card>
);

export const WithNodeInLabel = (args) => (
  <Card className="mt-1">
    <CardBody>
      <Datapair
        label={
          <>
            Name <Badge>awesome</Badge>
          </>
        }
        value="Stuff"
        {...args}
      />
    </CardBody>
  </Card>
);
