import React from 'react';
import { Button, Container } from 'reactstrap';
import { storiesOf } from '@kadira/storybook';

import Alert from '../src/components/Alert';

storiesOf('Alerts', module)
  .add('Colors', () => (
    <Container className="m-t-1">
      <Alert>
        <p>The default alert is a "warning". It supports any sort of custom markup.</p>
        <p className="m-b-0"><Button>Like This!</Button></p>
      </Alert>
      <Alert color="success">You can specify an alert color. This one has <code>color="success"</code></Alert>
      <Alert color="danger">This one looks dangerous!</Alert>
      <Alert color="info"><strong>Heads up!</strong> This alert needs your attention, but it's not super important.</Alert>
    </Container>
  ))
  .add('Icons', () => (
    <Container className="m-t-1">
      <Alert icon>You can also add an icon!</Alert>
      <Alert icon color="success">You can specify an alert color. This one has <code>color="success"</code></Alert>
      <Alert icon color="danger"><p className="m-b-0">Humblebrag prism twee, gochujang seitan whatever asymmetrical ramps enamel pin austin salvia swag helvetica. Chartreuse food truck tofu raclette, 3 wolf moon poke chia paleo skateboard. Pickled tote bag echo park raclette. Irony fashion axe sartorial, cornhole jean shorts vaporware flannel salvia glossier beard 3 wolf moon. Literally semiotics hammock irony cred, bicycle rights lomo selvage tousled vegan 8-bit. Four loko cardigan live-edge truffaut pour-over, helvetica chia brooklyn swag pug scenester kogi pitchfork leggings yuccie. Ethical put a bird on it portland vape YOLO.</p></Alert>
      <Alert icon color="info"><strong>Heads up!</strong> This alert needs your attention, but it's not super important.</Alert>
    </Container>
  ))
  .add('Bootstrap Extras', () => (
    <Container className="m-t-1">
      <Alert icon color="info">
        <h4 className="alert-heading">Well done!</h4>
        <p>You can use the <code>alert-heading</code> class on a heading to make it stand out!</p>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <p className="m-b-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </Alert>
    </Container>
  ));
