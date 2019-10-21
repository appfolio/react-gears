import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Badge, Button, Card, CardBody, Datapair } from '../src';

storiesOf('Datapair', module)
  .add('with props', () => {
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
          <Datapair label="Another Key" value="More content" labelSize={labelSize} stacked={stacked} />
        </CardBody>
      </Card>
    );
  })
  .add('with HTML value', () => (
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
  .add('with node in label', () => (
    <Card className="mt-1">
      <CardBody>
        <Datapair
          label={<>Name <Badge>awesome</Badge></>}
          value="Stuff"
        />
      </CardBody>
    </Card>
  ));
