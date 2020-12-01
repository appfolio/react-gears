import React from 'react';
import { select } from '@storybook/addon-knobs';
import { Container, Col, Row } from '../src';

export default {
  title: 'Layout',
};

export const Grid = () => (
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
      <a href="https://v4-alpha.getbootstrap.com/layout/grid/#how-it-works" rel="noopener noreferrer" target="_blank">Layout</a>
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
    `}
    </style>
  </Container>);

export const Offsets = () => (
  <Container className="text-xs-center">
    <style>{`
      /* Just to make example clearer, not needed */
      .row > div {
        background-color: #F0F0F0;
        border: 2px solid white;
        border-radius: 6px;
        padding: 0.5rem;
      }
    `}
    </style>
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
);

export const Responsive = () => (
  <Container className="text-xs-center">
    <style>{`
      /* Just to make example clearer, not needed */
      .row > div {
        background-color: #F0F0F0;
        border: 2px solid white;
        border-radius: 6px;
        padding: 0.5rem;
      }
    `}
    </style>
    <Row>
      <Col lg="2" md="6" xs="12">
        <h2 className="d-none d-lg-block">lg=2</h2>
        <h2 className="d-none d-md-block d-lg-none">md=6</h2>
        <h2 className="d-md-none">xs=12</h2>
      </Col>
      <Col lg="4" md="6" xs="12">
        <h2 className="d-none d-lg-block">lg=4</h2>
        <h2 className="d-none d-md-block d-lg-none">md=6</h2>
        <h2 className="d-md-none">xs=12</h2>
      </Col>
      <Col lg="6" md="12" xs="12">
        <h2 className="d-none d-lg-block">lg=6</h2>
        <h2 className="d-none d-md-block d-lg-none">md=12</h2>
        <h2 className="d-md-none">xs=12</h2>
      </Col>
    </Row>

    <Row>
      <Col lg="7" md="5" xs="12">
        <h2 className="d-none d-lg-block">lg=7</h2>
        <h2 className="d-none d-md-block d-lg-none">md=5</h2>
        <h2 className="d-md-none">xs=12</h2>
      </Col>
      <Col lg="5" md="7" xs="12">
        <h2 className="d-none d-lg-block">lg=5</h2>
        <h2 className="d-none d-md-block d-lg-none">md=7</h2>
        <h2 className="d-md-none">xs=12</h2>
      </Col>
    </Row>
  </Container>
);

export const Spacing = () => {
  const margin = `m${select('margin sides', ['', 't', 'b', 'l', 'r', 'x', 'y'], '')}-${select('margin amount', [0, 1, 2, 3, 4, 5], 3)}`;
  const padding = `p${select('padding sides', ['', 't', 'b', 'l', 'r', 'x', 'y'], '')}-${select('padding amount', [0, 1, 2, 3, 4, 5], 3)}`;
  return (
    <div>
      <p>
        Adjust 'knobs' in right sidebar →→→<br />
        Sides default to all sides when left blank.
      </p>
      <div className="bg-warning text-warning" style={{ border: '1px solid transparent' }}>
        <div className={`bg-info text-info ${margin} ${padding}`} style={{ border: '1px dashed grey' }}>
          <div style={{ backgroundColor: 'white', color: 'black', fontFamily: 'monospace' }}>
            {`className="${margin} ${padding}"`}
          </div>
        </div>
      </div>
      <br />
      <h4>
        <span className="text-warning">Margin</span> <span className="text-info">Padding</span> <span style={{ border: '1px dashed grey' }}>Element</span>
      </h4>
    </div>
  );
};
