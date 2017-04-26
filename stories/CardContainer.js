import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { CardContainer, Row, Col, InfoBox } from '../src';

storiesOf('CardContainer', module)
  .addWithInfo('Default', () => (
    <CardContainer title="Click to expand me" icon>
      <Row>
        <Col>
          <InfoBox color='success' title='$213,000' icon='check' />
        </Col>
        <Col>
          <InfoBox color='success' title='$213,000' icon='check' />
        </Col>
        <Col>
          <InfoBox color='success' title='$213,000' icon='check' />
        </Col>
      </Row>
    </CardContainer>
  ))
  .addWithInfo('Open', () => (
    <CardContainer title="Opened" open icon>
      <Row>
        <Col>
          <InfoBox color='success' title='$213,000' icon='check' />
        </Col>
        <Col>
          <InfoBox color='success' title='$213,000' icon='check' />
        </Col>
        <Col>
          <InfoBox color='success' title='$213,000' icon='check' />
        </Col>
      </Row>
    </CardContainer>
  ))
  .addWithInfo('with searchBar', () => (
    <CardContainer title="Search" open icon searchBar onSearch={(event) => alert(`The value you type: ${event.target.value}`)}>
      <p>You found me.</p>
    </CardContainer>
  ));
