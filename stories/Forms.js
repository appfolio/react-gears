import React from 'react';
import { Container, Input } from 'reactstrap';
import { storiesOf, action } from '@kadira/storybook';

import { BoundForm, FormRow, FormChoice, CurrencyInput, AddressInput } from '../src';
import { text, boolean, number, object, select } from '@kadira/storybook-addon-knobs';

const formData = {
  firstName: 'Obi-Wan',
  movie: 'The Force Awakens',
  ship: 'Millennium Falcon',
  characters: ['Luke Skywalker', 'awesome'],
  address: {
    address1: '123 Best Avenue'
  }
};

storiesOf('Forms', module)
  .addWithInfo('Live example', () => (
    <div>
      <FormRow
        type={select('type', ['select', 'checkbox', 'radio'], 'select')}
        label={text('label', 'Select a Movie')}
        color={select('color', ['', 'success', 'warning', 'danger'], 'danger')}
        feedback={text('feedback', 'You must select a movie')}
        name="live-input"
      >
        <FormChoice />
        <FormChoice value="override">A New Hope</FormChoice>
        <FormChoice>The Empire Strikes Back</FormChoice>
        <FormChoice>The Force Awakens</FormChoice>
      </FormRow>
    </div>
  ))
  .addWithInfo('Inputs', () => (
    <div>
      <h2 className="my-3">Default (Text) Input</h2>
      <Input placeholder="I'm a placeholder!" />

      <h2 className="my-3">Custom Inputs</h2>

      <section className="py-3">
        <p><code>&lt;CurrencyInput/&gt;</code></p>
        <CurrencyInput value={123456.7890} />
      </section>
    </div>
  ))
  .addWithInfo('Form Rows', () => (
    <form>
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
    </form>
  ))
  .addWithInfo('Forms with Objects', () => (
    <BoundForm
      object={formData}
      errors={object('errors', { lastName: "can't be blank" })}
      onSubmit={action('submit')}>
      <FormRow label="First Name" name="firstName" />
      <FormRow label="Last Name" name="lastName" required />
      <FormRow type={CurrencyInput} label="How much would you pay to meet the cast?" name="amount" />
      <FormRow type="select" label="Select Movie" name="movie">
        <FormChoice>A New Hope</FormChoice>
        <FormChoice value="episode6">The Empire Strikes Back</FormChoice>
        <FormChoice>The Force Awakens</FormChoice>
      </FormRow>
      <FormRow type="checkbox" label="Select the character(s) you like" name="characters">
        <FormChoice>Darth Vader</FormChoice>
        <FormChoice>Luke Skywalker</FormChoice>
        <FormChoice disabled>Emperor Palpatine</FormChoice>
        <FormChoice value="awesome">Rey</FormChoice>
        <FormChoice>TK-421</FormChoice>
      </FormRow>
      <FormRow type="radio" label="Select Ship" name="ship">
        <FormChoice>Death Star</FormChoice>
        <FormChoice>Millennium Falcon</FormChoice>
        <FormChoice value="shuttle">Imperial Shuttle</FormChoice>
      </FormRow>
      <FormRow type={AddressInput} name="address" label="Address" />
      <button className="btn btn-primary">Submit</button>
    </BoundForm>
  ));
