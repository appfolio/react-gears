import React from 'react';
import { Button, Card, CardBlock, Container } from 'reactstrap';
import { storiesOf } from '@kadira/storybook';

import Datapair from '../src/components/Datapair';

storiesOf('Datapair', module)
  .add('with props', () => (
    <Container>
      <Card className="m-t-1">
        <CardBlock>
          <Datapair label="Key" value="Some simple content would go here" />
          <Datapair label="Another Key" value="More content" />
        </CardBlock>
      </Card>
    </Container>
  ))
  .add('with HTML value', () => (
    <Container>
      <Card className="m-t-1">
        <CardBlock>
          <Datapair label="Label">Custom markup <Button color="primary">can go here</Button></Datapair>
          <Datapair label="This is a really long label that probably shouldn't be this long" value="Stuff"/>
        </CardBlock>
      </Card>
    </Container>
  ))
