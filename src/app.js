import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu, ButtonGroup,
        ButtonToolbar, Container, Row } from 'reactstrap';
import DateMonth from './components/datemonth/DateMonth.js';
import Icon from 'react-fontawesome';

import './app.css';

export default () => (
  <Container>
    <Row>
      <DateMonth value="Apr 2001" />
    </Row>

  </Container>
);
