import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import Datapair from './Datapair';

export default {
  title: 'Datapair',
  component: Datapair,
};

export const WithProps = () => {
  const stacked = boolean('stacked', false);
  const labelSize = select('labelSize', ['sm', 'md', 'lg'], 'md');
  return (
    <Card className="mt-1">
      <CardBody>
        <Datapair
          label={text('label', 'Key')}
          value={text('value', 'Some simple content would go here')}
          labelSize={labelSize}
          feedback={text('feedback')}
          hint={text('hint', '')}
          stacked={stacked}
        />
        <Datapair
          label="Another Key"
          value="More content"
          labelSize={labelSize}
          stacked={stacked}
        />
      </CardBody>
    </Card>
  );
};

export const WithHTMLValue = () => (
  <Card className="mt-1">
    <CardBody>
      <Datapair label="Label">
        Custom markup <Button color="primary">can go here</Button>
      </Datapair>
      <Datapair
        label="This is a really long label that probably shouldn't be this long"
        value="Stuff"
      />
    </CardBody>
  </Card>
);

export const WithNodeInLabel = () => (
  <Card className="mt-1">
    <CardBody>
      <Datapair
        label={
          <>
            Name <Badge>awesome</Badge>
          </>
        }
        value="Stuff"
      />
    </CardBody>
  </Card>
);
