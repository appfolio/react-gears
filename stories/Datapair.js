import React from 'react';
import { Button, Card, CardBlock, Badge } from 'reactstrap';
import { storiesOf } from '@storybook/react';

import { Datapair } from '../src';

const description = `
  Datapairs are clear and concise elements for displaying labeled data. Each element is comprised
  of two parts: the key (label) and a value. The key is an identifier for some form of data and
  the value can be text or links.
  `;

storiesOf('Datapair', module)
  .addWithInfo('with props', description, () => (
    <Card className="mt-1">
      <CardBlock>
        <Datapair label="Key" value="Some simple content would go here" />
        <Datapair label="Another Key" value="More content" />
      </CardBlock>
    </Card>
  ))
  .addWithInfo('with HTML value', description, () => (
    <Card className="mt-1">
      <CardBlock>
        <Datapair label="Label">
          Custom markup <Button color="primary">can go here</Button>
        </Datapair>
        <Datapair
          label="This is a really long label that probably shouldn't be this long"
          value="Stuff"
        />
      </CardBlock>
    </Card>
  ))
  .addWithInfo('with node in label', description, () => (
    <Card className="mt-1">
      <CardBlock>
        <Datapair label={<span>Name <Badge>awesome</Badge></span>} value="Stuff" />
      </CardBlock>
    </Card>
  ));
