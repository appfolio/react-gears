import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { CardContainer, Row, Col, InfoBox, Input, InputGroup, InputGroupAddon, Icon } from '../src';

storiesOf('CardContainer', module)
  .addWithInfo('Not expandable', () => (
    <CardContainer title='Not expandable'>
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
  .addWithInfo('Default close when is expandable', () => (
    <CardContainer title="Click to expand me" expandable>
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
    <CardContainer title="Opened" open expandable>
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
  .addWithInfo('with headerComponent', () => (
    <CardContainer
      title="Search"
      open
      expandable
      searchBar
      headerComponent={<InputGroup>
                        <Input placeholder='Search' onChange={(event) => alert(`The value you type: ${event.target.value}`)} />
                        <InputGroupAddon>
                          <Icon name='search' />
                        </InputGroupAddon>
                      </InputGroup>}
    >
      <p>You found me.</p>
    </CardContainer>
  ));
