import React from 'react';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';
import {
  AddressInput,
  BoundForm,
  BoundFormRow,
  Button,
  CheckboxInput,
  CountryInput,
  CreditCardNumber,
  CurrencyInput,
  DateInput,
  FileInput,
  Form,
  FormChoice,
  FormGroup,
  FormLabelGroup,
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

export default {
  title: 'Forms',
};

export const Inputs = () => (
  <div>
    <FormLabelGroup label="Input" inputId="hello">
      <Input placeholder="Hello World" id="hello" />
    </FormLabelGroup>
    <p>
      See all supported Input types here:{' '}
      <a href="https://reactstrap.github.io/components/form/">
        Reactstrap Form
      </a>.<br />
      In addition, we add these input components below:
    </p>
    <hr />

    <FormLabelGroup label="CheckboxInput" inputId="helloworld">
      <CheckboxInput id="helloworld" checkboxLabel="Hello World" />
    </FormLabelGroup>
    <FormLabelGroup label="CountryInput" inputId="countryinput">
      <CountryInput id="countryinput" />
    </FormLabelGroup>
    <FormLabelGroup label="CreditCardNumber" inputId="creditcardnumber">
      <CreditCardNumber value="4111111111111111" id="creditcardnumber" />
    </FormLabelGroup>
    <FormLabelGroup label="CurrencyInput" inputId="currencyinput">
      <CurrencyInput value={123456.789} id="currencyinput" />
    </FormLabelGroup>
    <FormLabelGroup label="DateInput" inputId="dateinput">
      <DateInput id="dateinput" />
    </FormLabelGroup>
    <FormLabelGroup label="FileInput" inputId="fileinput">
      <FileInput id="fileinput" />
    </FormLabelGroup>
    <FormLabelGroup label="MonthInput" inputId="monthinput">
      <MonthInput id="monthinput" />
    </FormLabelGroup>
    <FormLabelGroup label="StateInput" inputId="stateinput">
      <StateInput id="stateinput" />
    </FormLabelGroup>
    <FormLabelGroup label="StaticInput" inputId="staticinput">
      <StaticInput value="No Change" id="staticinput" />
    </FormLabelGroup>
  </div>
);

export const FloatingLabels = () => (
  <>
    <p>Wrap a pair of <code>&lt;Input&gt;</code> and <code>&lt;Label&gt;</code> components in <code>&lt;FormGroup floating&gt;</code> to enable floating labels with Bootstrap’s textual form fields. A <code>placeholder</code> is required on each <code>&lt;Input&gt;</code> as our method of CSS-only floating labels uses the <code>:placeholder-shown</code> pseudo-element. Also note that the <code>&lt;Input&gt;</code> must come first so we can utilize a sibling selector (e.g., <code>~</code>).</p>
    <Form inline>
      <FormGroup floating>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        <Label for="exampleEmail">Email</Label>
      </FormGroup>
      {' '}
      <FormGroup floating>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        <Label for="examplePassword">Password</Label>
      </FormGroup>
      {' '}
      <Button>Submit</Button>
    </Form>
  </>
);

export const FormRows = () => (
  <Form>
    <FormRow label="First Name" id="first" />
    <FormRow label="Last Name" feedback="can't be blank" color="danger" id="last" />
    <FormRow label="Nickname" hint="A fun name to describe yourself!" id="nick" />
    <FormRow label="DOB" required id="dob" />
    <FormRow label="Disabled Field" disabled id="disabled" />
    <FormRow
      label="Who is Luke's Father?"
      value="Darth Vader"
      type="static"
      id="luke"
    />
    <FormRow type="textarea" label="Notes" id="notes" />
    <FormRow
      type="select"
      label="Select Movie"
      color="success"
      feedback="Awesome!"
      id="movie"
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
      id="ship"
    >
      <FormChoice color="danger">Death Star</FormChoice>
      <FormChoice color="warning">Millennium Falcon</FormChoice>
      <FormChoice color="success">Imperial Shuttle</FormChoice>
    </FormRow>
    <FormRow type="checkbox" label="Select the character(s) you like" id="characters">
      <FormChoice>Darth Vader</FormChoice>
      <FormChoice>Luke Skywalker</FormChoice>
      <FormChoice disabled>Emperor Palpatine</FormChoice>
      <FormChoice>Rey</FormChoice>
      <FormChoice>TK-421</FormChoice>
    </FormRow>
    <FormRow type="checkbox" label="Use Jedi mind tricks?" id="jedi" />
    <FormRow type="radio" label="Do you like Star Wars?" inline name="movie" id="starwars">
      <FormChoice>Yes</FormChoice>
      <FormChoice disabled>No</FormChoice>
    </FormRow>
    <FormRow
      type={CurrencyInput}
      label="How much would you pay to meet the cast?"
      id="pay"
    />
  </Form>
);

export const Bound = () => (
  <BoundForm
    object={formData}
    errors={object('errors', { lastName: 'Last Name is required' })}
    onSubmit={action('submit')}
  >
    <BoundFormRow label="First Name" name="firstName" id="firstName" />
    <BoundFormRow label="Last Name" name="lastName" required id="lastName" />
    <BoundFormRow
      type={CurrencyInput}
      label="How much would you pay to meet the cast?"
      name="amount"
      id="pay"
    />
    <BoundFormRow type="select" label="Select Movie" name="movie" id="movie">
      <FormChoice>A New Hope</FormChoice>
      <FormChoice value="episode6">The Empire Strikes Back</FormChoice>
      <FormChoice>The Force Awakens</FormChoice>
    </BoundFormRow>
    <BoundFormRow
      type="checkbox"
      label="Select the character(s) you like"
      name="characters"
      id="characters"
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
      id="mindTricks"
    />
    <BoundFormRow type="radio" label="Select Ship" name="ship" id="ship">
      <FormChoice>Death Star</FormChoice>
      <FormChoice>Millennium Falcon</FormChoice>
      <FormChoice value="shuttle">Imperial Shuttle</FormChoice>
    </BoundFormRow>
    <BoundFormRow type={AddressInput} name="address" label="Address" id="address" />
    <BoundFormRow
      type="file"
      label="Death Star Schematics"
      name="deathStarPlans"
      id="deathStarPlans"
      multiple
    />
    <button className="btn btn-primary">Submit</button>
  </BoundForm>
);
