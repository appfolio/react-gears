import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Card, Container, Col, Row } from '../src';

storiesOf('Layout', module)
  .addWithInfo('Grid', () => (
    <Container className="text-xs-center">
      <style>{`
        /* Just to make example clearer, not needed */
        .row > div {
          background-color: #F0F0F0;
          border: 2px solid white;
          border-radius: 6px;
          padding: 0.5rem;
        }
      `}</style>
      <Row>
        <Col xs={1}>1</Col>
        <Col xs={1}>1</Col>
        <Col xs={1}>1</Col>
        <Col xs={1}>1</Col>
        <Col xs={1}>1</Col>
        <Col xs={1}>1</Col>
        <Col xs={1}>1</Col>
        <Col xs={1}>1</Col>
        <Col xs={1}>1</Col>
        <Col xs={1}>1</Col>
        <Col xs={1}>1</Col>
        <Col xs={1}>1</Col>
      </Row>
      <Row>
        <Col xs={2}>2</Col>
        <Col xs={2}>2</Col>
        <Col xs={2}>2</Col>
        <Col xs={2}>2</Col>
        <Col xs={2}>2</Col>
        <Col xs={2}>2</Col>
      </Row>
      <Row>
        <Col xs={3}>3</Col>
        <Col xs={3}>3</Col>
        <Col xs={3}>3</Col>
        <Col xs={3}>3</Col>
      </Row>
      <Row>
        <Col xs={4}>4</Col>
        <Col xs={4}>4</Col>
        <Col xs={4}>4</Col>
      </Row>
      <Row>
        <Col xs={6}>6</Col>
        <Col xs={6}>6</Col>
      </Row>
      <Row>
        <Col xs={12}>12</Col>
      </Row>
    </Container>)
  )
  .addWithInfo('Offsets', () => (
    <Container className="text-xs-center">
      <style>{`
        /* Just to make example clearer, not needed */
        .row > div {
          background-color: #F0F0F0;
          border: 2px solid white;
          border-radius: 6px;
          padding: 0.5rem;
        }
      `}</style>
      <Row>
        <Col xs={{ size: 2, offset: 2 }}>2 offset 2</Col>
        <Col xs={{ size: 2, offset: 4 }}>2 offset 4</Col>
      </Row>
      <Row>
        <Col xs={{ size: 4, offset: 1 }}>4 offset 1</Col>
        <Col xs={{ size: 4, offset: 2 }}>4 offset 2</Col>
      </Row>
      <Row>
        <Col xs={6}>6</Col>
        <Col xs={6}>6</Col>
      </Row>
    </Container>
  ))
  .addWithInfo('Responsive', () => (
    <Container className="text-xs-center">
      <style>{`
        /* Just to make example clearer, not needed */
        .row > div {
          background-color: #F0F0F0;
          border: 2px solid white;
          border-radius: 6px;
          padding: 0.5rem;
        }
      `}</style>
      <Row>
        <Col lg="2" md="6" sm="12">
          <h2 className="hidden-md-down">2</h2>
          <h2 className="hidden-lg-up hidden-sm-down">6</h2>
          <h2 className="hidden-md-up">12</h2>
        </Col>
        <Col lg="4" md="6" sm="12">
          <h2 className="hidden-md-down">4</h2>
          <h2 className="hidden-lg-up hidden-sm-down">6</h2>
          <h2 className="hidden-md-up">12</h2>
        </Col>
        <Col lg="6" md="12" sm="12">
          <h2 className="hidden-md-down">6</h2>
          <h2 className="hidden-lg-up hidden-sm-down">12</h2>
          <h2 className="hidden-md-up">12</h2>
        </Col>
      </Row>

      <Row>
        <Col lg="7" md="5" sm="12">
          <h2 className="hidden-md-down">7</h2>
          <h2 className="hidden-lg-up hidden-sm-down">5</h2>
          <h2 className="hidden-md-up">12</h2>
        </Col>
        <Col lg="5" md="7" sm="12">
          <h2 className="hidden-md-down">5</h2>
          <h2 className="hidden-lg-up hidden-sm-down">7</h2>
          <h2 className="hidden-md-up">12</h2>
        </Col>
      </Row>
    </Container>
  ));

