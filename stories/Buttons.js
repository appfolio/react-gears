import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, ButtonDropdown,
         DropdownToggle, DropdownMenu, DropdownItem, Row } from 'reactstrap';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

storiesOf('Buttons', module)
  .addWithInfo('Live example', () => (
    <Button
      color={select('color', ['', 'primary', 'secondary', 'info', 'success', 'warning', 'danger'], 'primary')}
      disabled={boolean('disabled', false)}
      outline={boolean('outline', false)}
      size={select('size', ['', 'sm', 'lg'])}
    >
      {text('Label', 'Click Me')}
    </Button>
  ))
  .addWithInfo('Colors', () => (
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
    )
  )
  .addWithInfo('Disabled', () => (
    <ButtonToolbar>
      <Button disabled>Default</Button>
      <Button disabled color="primary">Primary</Button>
      <Button disabled color="secondary">Secondary</Button>
      <Button disabled color="success">Success</Button>
      <Button disabled color="info">Info</Button>
      <Button disabled color="warning">Warning</Button>
      <Button disabled color="danger">Danger</Button>
      <Button disabled color="link">Link</Button>
    </ButtonToolbar>
    )
  )
  .addWithInfo('Outline', () => (
    <ButtonToolbar>
      <Button outline>Default</Button>
      <Button outline color="primary">Primary</Button>
      <Button outline color="secondary">Secondary</Button>
      <Button outline color="success">Success</Button>
      <Button outline color="info">Info</Button>
      <Button outline color="warning">Warning</Button>
      <Button outline color="danger">Danger</Button>
      <Button outline color="link">Link</Button>
    </ButtonToolbar>
    )
  )
  .addWithInfo('Sizes', () => (
    <div>
      <Button color="primary" size="lg">Large button</Button>&nbsp;
      <Button color="primary" size="md">Medium button</Button>&nbsp;
      <Button color="primary" size="sm">Small button</Button>
    </div>
    )
  )
  .addWithInfo('Groups', () => (
    <div>
      <Row className="mb-1">
        <Button size="lg" block>Block level button</Button>
      </Row>
      <Row className="mb-1">
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Row>
      <Row className="mb-1">
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
            <ButtonDropdown toggle={() => {}}>
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
    </div>
  ));
// TODO
//  .addWithInfo('with dropdowns', () => <h1>TODO</h1>)
//  .addWithInfo('with split dropdowns', () => <h1>TODO</h1>)
//  .addWithInfo('with dropups', () => <h1>TODO</h1>);
