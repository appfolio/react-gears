import React from 'react';
import { Container, Input } from 'reactstrap';
import { storiesOf } from '@kadira/storybook';

import FormRow from '../src/components/FormRow';

storiesOf('Forms', module)
  .add('Inputs', () => (
    <Container className="m-t-3">
      <h1 className="display-4 m-b-3">Inputs</h1>
      <p className="lead">An <code>Input</code> is the simplest unit for building forms.</p>

      <h2 className="m-y-3">Example</h2>
      <Input placeholder="I'm a placeholder!" />
    </Container>
  ))
  .add('Form Rows', () => (
    <Container className="m-t-3">
      <h1 className="display-4 m-b-3">Form Rows</h1>
      <p className="lead">A <code>FormRow</code> combines a label and an input with an interface to provide feedback, hints, and can specify whether or not the field is required.</p>

      <h2 className="m-y-3">Example</h2>
      <FormRow label="First Name" />
      <FormRow label="Last Name" feedback="can't be blank" color="danger" />
      <FormRow label="Nickname" hint="A fun name to describe yourself!" />
      <FormRow label="DOB" required />
      <FormRow state="warning" placeholder="Labels can be omitted but that may be bad"/>
    </Container>
  ));
