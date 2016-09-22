import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu, ButtonGroup,
        ButtonToolbar, Container, Row } from 'reactstrap';

export default () => (
  <Container>
    <h2>Buttons</h2>
    <Row className="m-b-1">
      <ButtonToolbar>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="info">Info</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
        <Button color="link">Link</Button>
      </ButtonToolbar>
    </Row>
    <Row className="m-b-1">
      <ButtonToolbar>
        <Button>Default</Button>
        <Button outline color="primary">Primary</Button>
        <Button outline color="secondary">Secondary</Button>
        <Button outline color="success">Success</Button>
        <Button outline color="info">Info</Button>
        <Button outline color="warning">Warning</Button>
        <Button outline color="danger">Danger</Button>
        <Button outline color="link">Link</Button>
      </ButtonToolbar>
    </Row>

    <Row className="m-b-1">
      <ButtonToolbar>
        <Button color="primary" size="lg">Large button</Button>
        <Button color="primary" size="md">Medium button</Button>
        <Button color="primary" size="sm">Small button</Button>
        <Button disabled color="primary">Disabled button</Button>
      </ButtonToolbar>
    </Row>
    <Row className="m-b-1">
      <Button size="lg" block>Block level button</Button>
    </Row>
    <Row className="m-b-1">
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </Row>
    <Row className="m-b-1">
      <ButtonToolbar>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button>8</Button>
          <ButtonDropdown>
            <DropdownToggle caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </ButtonGroup>
      </ButtonToolbar>
    </Row>
    <Row>
      <ButtonGroup vertical>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    </Row>
  </Container>
);
