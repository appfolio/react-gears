import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import {
  AddressInput,
  BoundForm,
  BoundFormRow,
  CheckboxInput,
  CountryInput,
  CreditCardNumber,
  CurrencyInput,
  DateInput,
  FileInput,
  FormChoice,
  FormLabelGroup,
  FormRow,
  Input,
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

storiesOf('Forms', module)
  .add('Inputs', () => (
    <div>
      <FormLabelGroup label="Input">
        <Input placeholder="Hello World" />
      </FormLabelGroup>
      <p>
        See all supported Input types here:{' '}
        <a href="https://reactstrap.github.io/components/form/">
          Reactstrap Form
        </a>.<br />
        In addition, we add these input components below:
      </p>
      <hr />

      <FormLabelGroup label="CheckboxInput">
        <CheckboxInput id="hello" checkboxLabel="Hello World" />
      </FormLabelGroup>
      <FormLabelGroup label="CountryInput">
        <CountryInput />
      </FormLabelGroup>
      <FormLabelGroup label="CreditCardNumber">
        <CreditCardNumber value="4111111111111111" />
      </FormLabelGroup>
      <FormLabelGroup label="CurrencyInput">
        <CurrencyInput value={123456.789} />
      </FormLabelGroup>
      <FormLabelGroup label="DateInput">
        <DateInput />
      </FormLabelGroup>
      <FormLabelGroup label="FileInput">
        <FileInput />
      </FormLabelGroup>
      <FormLabelGroup label="MonthInput">
        <MonthInput />
      </FormLabelGroup>
      <FormLabelGroup label="StateInput">
        <StateInput />
      </FormLabelGroup>
      <FormLabelGroup label="StaticInput">
        <StaticInput value="No Change" />
      </FormLabelGroup>
    </div>
  ))
  .add('Form Rows', () => (
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
  .add('Forms with Objects', () => (
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
