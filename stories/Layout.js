import React from 'react';
import { storiesOf } from '@storybook/react';

import { Container, Col, Row } from '../src';

storiesOf('Layout', module)
  .addWithInfo('Grid', () => (
    <Container fluid className="text-xs-center">
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
      <h3 className="my-5">
        More information about the layout grid can be read here:&nbsp;
        <a href="https://v4-alpha.getbootstrap.com/layout/grid/#how-it-works" target="_blank">Layout</a>
      </h3>
      <hr />
      <style>{`
        /* Just to make example clearer, not needed */
        .row > div {
          background-color: #F0F0F0;
          border: 2px solid white;
          border-radius: 6px;
          padding: 0.5rem;
        }
      `}</style>
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
        <Col lg="2" md="6" xs="12">
          <h2 className="hidden-md-down">lg=2</h2>
          <h2 className="hidden-lg-up hidden-sm-down">md=6</h2>
          <h2 className="hidden-md-up">xs=12</h2>
        </Col>
        <Col lg="4" md="6" xs="12">
          <h2 className="hidden-md-down">lg=4</h2>
          <h2 className="hidden-lg-up hidden-sm-down">md=6</h2>
          <h2 className="hidden-md-up">xs=12</h2>
        </Col>
        <Col lg="6" md="12" xs="12">
          <h2 className="hidden-md-down">lg=6</h2>
          <h2 className="hidden-lg-up hidden-sm-down">md=12</h2>
          <h2 className="hidden-md-up">xs=12</h2>
        </Col>
      </Row>

      <Row>
        <Col lg="7" md="5" xs="12">
          <h2 className="hidden-md-down">lg=7</h2>
          <h2 className="hidden-lg-up hidden-sm-down">md=5</h2>
          <h2 className="hidden-md-up">xs=12</h2>
        </Col>
        <Col lg="5" md="7" xs="12">
          <h2 className="hidden-md-down">lg=5</h2>
          <h2 className="hidden-lg-up hidden-sm-down">md=7</h2>
          <h2 className="hidden-md-up">xs=12</h2>
        </Col>
      </Row>
    </Container>
  ));

