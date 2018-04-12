import React from 'react';
import { Button, Card, CardBody, Badge } from 'reactstrap';
import { storiesOf } from '@storybook/react';

import { Datapair } from '../src';

storiesOf('Datapair', module)
  .addWithInfo('with props', () => (
    <Card className="mt-1">
      <CardBody>
        <Datapair label="Key" value="Some simple content would go here" />
        <Datapair label="Another Key" value="More content" />
      </CardBody>
    </Card>
  ))
  .addWithInfo('with HTML value', () => (
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
  ))
  .addWithInfo('with node in label', () => (
    <Card className="mt-1">
      <CardBody>
        <Datapair label={<span>Name <Badge>awesome</Badge></span>}>
          Stuff
        </Datapair>
      </CardBody>
    </Card>
  ));
