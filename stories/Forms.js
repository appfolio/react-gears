import React from 'react';
import { Container, Input } from 'reactstrap';
import { storiesOf } from '@kadira/storybook';

import { FormRow, FormChoice, CurrencyInput } from '../src';

storiesOf('Forms', module)
  .addWithInfo('Inputs', () => (
    <Container className="mt-3">
      <h1 className="display-4 mb-3">Inputs</h1>
      <p className="lead">An <code>Input</code> is the simplest unit for building forms.</p>

      <h2 className="my-3">Default (Text) Input</h2>
      <Input placeholder="I'm a placeholder!" />

      <h2 className="my-3">Custom Inputs</h2>
      <p><code>&lt;CurrencyInput/&gt;</code></p>
      <CurrencyInput />
    </Container>
  ))
  .addWithInfo('Form Rows', () => (
    <Container className="mt-3">
      <h1 className="display-4 mb-3">Form Rows</h1>
      <p className="lead">A <code>FormRow</code> combines a label and an input with an interface to provide feedback, hints, and can specify whether or not the field is required.</p>

      <h2 className="my-3">Example</h2>
      <FormRow label="First Name" />
      <FormRow label="Last Name" feedback="can't be blank" color="danger" />
      <FormRow label="Nickname" hint="A fun name to describe yourself!" />
      <FormRow label="DOB" required />
      <FormRow label="Disabled Field" disabled />
      <FormRow label="Who is Luke's Father?" value="Darth Vader" type="static" />
      <FormRow state="warning" placeholder="Labels can be omitted but that may be bad"/>
      <FormRow type="textarea" label="Notes" />
      <FormRow type="select" label="Select Movie" color="success" feedback="Awesome!">
        <FormChoice value="override">A New Hope</FormChoice>
        <FormChoice>The Empire Strikes Back</FormChoice>
        <FormChoice>The Force Awakens</FormChoice>
      </FormRow>
      <FormRow type="radio" label="Select Ship" hint="Some ships are unreliable..." name="ship">
        <FormChoice color="danger">Death Star</FormChoice>
        <FormChoice color="warning">Millennium Falcon</FormChoice>
        <FormChoice color="success">Imperial Shuttle</FormChoice>
      </FormRow>
      <FormRow type="checkbox" label="Select the character(s) you like">
        <FormChoice>Darth Vader</FormChoice>
        <FormChoice>Luke Skywalker</FormChoice>
        <FormChoice disabled>Emperor Palpatine</FormChoice>
        <FormChoice>Rey</FormChoice>
        <FormChoice>TK-421</FormChoice>
      </FormRow>
      <FormRow type="radio" label="Do you like Star Wars?" inline name="movie">
        <FormChoice>Yes</FormChoice>
        <FormChoice disabled>No</FormChoice>
      </FormRow>
      <FormRow type={CurrencyInput} label="How much would you pay to meet the cast?" />
    </Container>
  ));
