import React from 'react';
import { Container, Input } from 'reactstrap';
import { storiesOf } from '@kadira/storybook';

import FormRow from '../src/components/FormRow';
import FormChoice from '../src/components/FormChoice';

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
      <FormRow type="select" label="Select Movie" color="success" feedback="Awesome!">
        <option>A New Hope</option>
        <option>The Empire Strikes Back</option>
        <option>The Force Awakens</option>
      </FormRow>
      <FormRow type="checkbox" label="Select Character(s)">
        <FormChoice>Darth Vader</FormChoice>
        <FormChoice>Luke Skywalker</FormChoice>
        <FormChoice>Rey</FormChoice>
      </FormRow>
      <FormRow type="radio" label="Do you like Star Wars?" inline name="star_wars">
        <FormChoice>Yes</FormChoice>
        <FormChoice>No</FormChoice>
      </FormRow>
    </Container>
  ));
