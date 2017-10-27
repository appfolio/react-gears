import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { text, boolean, number, object, select } from '@storybook/addon-knobs';

import {
  AddressInput,
  BoundForm,
  BoundFormRow,
  CheckboxInput,
  Col,
  CountryInput,
  CreditCardNumber,
  CurrencyInput,
  DateInput,
  FileInput,
  FormChoice,
  FormGroup,
  FormRow,
  Input,
  Label,
  MonthInput,
  StateInput,
  StaticInput,
} from '../src';

const formData = {
  firstName: 'Obi-Wan',
  movie: 'The Force Awakens',
  ship: 'Millennium Falcon',
  characters: ['Luke Skywalker', 'awesome'],
  address: {
    address1: '123 Best Avenue',
  },
  mindTricks: true,
};

const colKnobOptions = {
  range: true,
  min: 1,
  max: 12,
};

storiesOf('Forms', module)
  .addWithInfo('Live example', () => (
    <div>
      <FormRow
        type={select('type', ['select', 'checkbox', 'radio'], 'select')}
        label={text('label', 'Select a Movie')}
        color={select('color', ['', 'success', 'warning', 'danger'], 'danger')}
        feedback={text('feedback', 'You must select a movie')}
        stacked={boolean('stacked', false)}
        width={{
          xs: number('xs width', 12, colKnobOptions),
          sm: number('sm width', 12, colKnobOptions),
          md: number('md width', 12, colKnobOptions),
          lg: number('lg width', 12, colKnobOptions),
          xl: number('xl width', 12, colKnobOptions),
        }}
        name="live-input"
      >
        <FormChoice value="override">A New Hope</FormChoice>
        <FormChoice>The Empire Strikes Back</FormChoice>
        <FormChoice>The Force Awakens</FormChoice>
      </FormRow>
    </div>
  ))
  .addWithInfo('Inputs', () => (
    <div>
      <FormGroup row>
        <Label sm={3}>Input</Label>
        <Col sm={9}>
          <Input placeholder="Hello World" />
        </Col>
      </FormGroup>
      <p>
        See all supported Input types here:{' '}
        <a href="https://reactstrap.github.io/components/form/">
          Reactstrap Form
        </a>.<br />
        In addition, we add these input components below:
      </p>
      <hr />

      <FormGroup row>
        <Label sm={3}>CheckboxInput</Label>
        <Col sm={9}>
          <CheckboxInput placeholder="Hello World" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={3}>CountryInput</Label>
        <Col sm={9}>
          <CountryInput />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={3}>CreditCardNumber</Label>
        <Col sm={9}>
          <CreditCardNumber value="4111111111111111" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={3}>CurrencyInput</Label>
        <Col sm={9}>
          <CurrencyInput value={123456.789} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={3}>DateInput</Label>
        <Col sm={9}>
          <DateInput />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={3}>FileInput</Label>
        <Col sm={9}>
          <FileInput />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={3}>MonthInput</Label>
        <Col sm={9}>
          <MonthInput />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={3}>StateInput</Label>
        <Col sm={9}>
          <StateInput />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={3}>StaticInput</Label>
        <Col sm={9}>
          <StaticInput value="No Change" />
        </Col>
      </FormGroup>
    </div>
  ))
  .addWithInfo('Form Rows', () => (
    <form>
      <FormRow label="First Name" />
      <FormRow label="Last Name" feedback="can't be blank" color="danger" />
      <FormRow label="Nickname" hint="A fun name to describe yourself!" />
      <FormRow label="DOB" required />
      <FormRow label="Disabled Field" disabled />
      <FormRow
        label="Who is Luke's Father?"
        value="Darth Vader"
        type="static"
      />
      <FormRow
        state="warning"
        placeholder="Labels can be omitted but that may be bad"
      />
      <FormRow type="textarea" label="Notes" />
      <FormRow
        type="select"
        label="Select Movie"
        color="success"
        feedback="Awesome!"
      >
        <FormChoice value="override">A New Hope</FormChoice>
        <FormChoice>The Empire Strikes Back</FormChoice>
        <FormChoice>The Force Awakens</FormChoice>
      </FormRow>
      <FormRow
        type="radio"
        label="Select Ship"
        hint="Some ships are unreliable..."
        name="ship"
      >
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
      <FormRow type="checkbox" label="Use Jedi mind tricks?" />
      <FormRow type="radio" label="Do you like Star Wars?" inline name="movie">
        <FormChoice>Yes</FormChoice>
        <FormChoice disabled>No</FormChoice>
      </FormRow>
      <FormRow
        type={CurrencyInput}
        label="How much would you pay to meet the cast?"
      />
    </form>
  ))
  .addWithInfo('Forms with Objects', () => (
    <BoundForm
      object={formData}
      errors={object('errors', { lastName: "can't be blank" })}
      onSubmit={action('submit')}
    >
      <BoundFormRow label="First Name" name="firstName" />
      <BoundFormRow label="Last Name" name="lastName" required />
      <BoundFormRow
        type={CurrencyInput}
        label="How much would you pay to meet the cast?"
        name="amount"
      />
      <BoundFormRow type="select" label="Select Movie" name="movie">
        <FormChoice>A New Hope</FormChoice>
        <FormChoice value="episode6">The Empire Strikes Back</FormChoice>
        <FormChoice>The Force Awakens</FormChoice>
      </BoundFormRow>
      <BoundFormRow
        type="checkbox"
        label="Select the character(s) you like"
        name="characters"
      >
        <FormChoice>Darth Vader</FormChoice>
        <FormChoice>Luke Skywalker</FormChoice>
        <FormChoice disabled>Emperor Palpatine</FormChoice>
        <FormChoice value="awesome">Rey</FormChoice>
        <FormChoice>TK-421</FormChoice>
      </BoundFormRow>
      <BoundFormRow
        type="checkbox"
        label="Use Jedi mind tricks?"
        name="mindTricks"
      />
      <BoundFormRow type="radio" label="Select Ship" name="ship">
        <FormChoice>Death Star</FormChoice>
        <FormChoice>Millennium Falcon</FormChoice>
        <FormChoice value="shuttle">Imperial Shuttle</FormChoice>
      </BoundFormRow>
      <BoundFormRow type={AddressInput} name="address" label="Address" />
      <BoundFormRow
        type="file"
        label="Death Star Schematics"
        name="deathStarPlans"
        multiple
      />
      <button className="btn btn-primary">Submit</button>
    </BoundForm>
  ));
