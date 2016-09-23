import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { storiesOf } from '@kadira/storybook';

import DateMonth from '../src/components/datemonth/DateMonth';

storiesOf('DateMonth', module)
  .add('with props', () => (
    <Container>
      <Row className="flex-items-xs-center">
        <Col sm="3">
          <DateMonth value="Nov 1979" />
        </Col>
      </Row>
      <h4>Example:</h4>
      <pre>{`<DateMonth value="Nov 1979" />`}</pre>
    </Container>
  ))
  .add('with invalid props', () => (
    <Container>
      <Row className="flex-items-xs-center">
        <Col sm="3">
          <DateMonth value="some bad input" />
        </Col>
      </Row>
      <h4>Example:</h4>
      <pre>{`<DateMonth value="some bad input" />`}</pre>
    </Container>
  ));
