import { action } from '@storybook/addon-actions';
import React from 'react';
import AddressInput from '../Address/AddressInput';
import CountryInput from '../Address/CountryInput';
import StateInput from '../Address/StateInput';
import Button from '../Button/Button';
import CheckboxInput from '../Checkbox/CheckboxInput';
import CreditCardNumber from '../Input/CreditCardNumber';
import CurrencyInput from '../Input/CurrencyInput';
import DateInput from '../Input/DateInput';
import FileInput from '../Input/FileInput';
import Input from '../Input/Input';
import MonthInput from '../Input/MonthInput';
import StaticInput from '../Input/StaticInput';
import Label from '../Label/Label';
import BoundForm from './BoundForm';
import BoundFormRow from './BoundFormRow';
import Form from './Form';
import FormChoice from './FormChoice';
import FormGroup from './FormGroup';
import FormLabelGroup from './FormLabelGroup';
import FormRow from './FormRow';

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
  parameters: {
    sourceLink: 'Form/Form.tsx',
  },
};

export const Inputs = (args) => (
  <div>
    <FormLabelGroup label="Input" inputId="hello" {...args}>
      <Input placeholder="Hello World" id="hello" name="hello" />
    </FormLabelGroup>
    <p>
      See all supported Input types here:{' '}
      <a href="https://reactstrap.github.io/components/form/">Reactstrap Form</a>.<br />
      In addition, we add these input components below:
    </p>
    <hr />

    <FormLabelGroup label="CheckboxInput" inputId="helloworld">
      <CheckboxInput id="helloworld" checkboxLabel="Hello World" name="helloworld" />
    </FormLabelGroup>
    <FormLabelGroup label="CountryInput" inputId="countryinput">
      <CountryInput id="countryinput" name="countryinput" />
    </FormLabelGroup>
    <FormLabelGroup label="CreditCardNumber" inputId="creditcardnumber">
      <CreditCardNumber value="4111111111111111" id="creditcardnumber" name="creditcardnumber" />
    </FormLabelGroup>
    <FormLabelGroup label="CurrencyInput" inputId="currencyinput">
      <CurrencyInput value={123456.789} id="currencyinput" name="currencyinput" />
    </FormLabelGroup>
    <FormLabelGroup label="DateInput" inputId="dateinput">
      <DateInput id="dateinput" name="dateinput" />
    </FormLabelGroup>
    <FormLabelGroup label="FileInput" inputId="fileinput">
      <FileInput id="fileinput" name="fileinput" />
    </FormLabelGroup>
    <FormLabelGroup label="MonthInput" inputId="monthinput">
      <MonthInput id="monthinput" name="monthinput" />
    </FormLabelGroup>
    <FormLabelGroup label="StateInput" inputId="stateinput">
      <StateInput id="stateinput" name="stateinput" />
    </FormLabelGroup>
    <FormLabelGroup label="StaticInput" inputId="staticinput">
      <StaticInput value="No Change" id="staticinput" name="staticinput" />
    </FormLabelGroup>
  </div>
);

export const FloatingLabels = (args) => (
  <>
    <p>
      Wrap a pair of <code>&lt;Input&gt;</code> and <code>&lt;Label&gt;</code> components in{' '}
      <code>&lt;FormGroup floating&gt;</code> to enable floating labels with Bootstrap’s textual
      form fields. A <code>placeholder</code> is required on each <code>&lt;Input&gt;</code> as our
      method of CSS-only floating labels uses the <code>:placeholder-shown</code> pseudo-element.
      Also note that the <code>&lt;Input&gt;</code> must come first so we can utilize a sibling
      selector (e.g., <code>~</code>).
    </p>
    <Form inline {...args}>
      <FormGroup floating>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        <Label for="exampleEmail">Email</Label>
      </FormGroup>{' '}
      <FormGroup floating>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        <Label for="examplePassword">Password</Label>
      </FormGroup>{' '}
      <Button>Submit</Button>
    </Form>
  </>
);

export const FormRows = (args) => (
  <Form>
    <FormRow label="First Name" id="name" name="first" {...args} />
    <FormRow label="Last Name" id="last" feedback="can't be blank" color="danger" name="last" />
    <FormRow label="Nickname" id="nick" hint="A fun name to describe yourself!" name="nick" />
    <FormRow label="DOB" id="dob" required name="dob" />
    <FormRow label="Disabled Field" id="disabled" disabled name="disabled" />
    <FormRow
      label="Who is Luke's Father?"
      id="luke"
      value="Darth Vader"
      type="static"
      name="luke"
    />
    <FormRow type="textarea" label="Notes" id="notes" name="notes" />
    <FormRow
      type="select"
      label="Select Movie"
      id="movie"
      color="success"
      feedback="Awesome!"
      name="movie"
    >
      <FormChoice value="episode4">A New Hope</FormChoice>
      <FormChoice value="episode5">The Empire Strikes Back</FormChoice>
      <FormChoice value="episode7">The Force Awakens</FormChoice>
    </FormRow>
    <FormRow type="radio" label="Select Ship" hint="Some ships are unreliable..." name="ship">
      <FormChoice color="danger" value="deathstar">
        Death Star
      </FormChoice>
      <FormChoice color="warning" value="millennium">
        Millennium Falcon
      </FormChoice>
      <FormChoice color="success" value="shuttle">
        Imperial Shuttle
      </FormChoice>
    </FormRow>
    <FormRow type="checkbox" label="Select the character(s) you like" name="characters">
      <FormChoice value="vader">Darth Vader</FormChoice>
      <FormChoice value="luke">Luke Skywalker</FormChoice>
      <FormChoice disabled value="palpatine">
        Emperor Palpatine
      </FormChoice>
      <FormChoice value="rey">Rey</FormChoice>
      <FormChoice value="tk421">TK-421</FormChoice>
    </FormRow>
    <FormRow type="checkbox" label="Use Jedi mind tricks?" id="jediTricks" name="jediTricks" />
    <FormRow type="radio" label="Do you like Star Wars?" inline name="likeStarWars">
      <FormChoice>Yes</FormChoice>
      <FormChoice disabled>No</FormChoice>
    </FormRow>
    <FormRow
      type={CurrencyInput}
      label="How much would you pay to meet the cast?"
      id="pay"
      name="pay"
    />
  </Form>
);

export const Bound = (args) => (
  <BoundForm object={formData} {...args}>
    <BoundFormRow label="First Name" id="firstName" name="firstName" />
    <BoundFormRow label="Last Name" id="lastName" name="lastName" required />
    <BoundFormRow
      type={CurrencyInput}
      label="How much would you pay to meet the cast?"
      id="pay"
      name="pay"
    />
    <BoundFormRow type="select" label="Select Movie" id="movie" name="movie">
      <FormChoice value="episode4">A New Hope</FormChoice>
      <FormChoice value="episode5">The Empire Strikes Back</FormChoice>
      <FormChoice value="episode7">The Force Awakens</FormChoice>
    </BoundFormRow>
    <BoundFormRow type="checkbox" label="Select the character(s) you like" name="characters">
      <FormChoice value="vader">Darth Vader</FormChoice>
      <FormChoice value="luke">Luke Skywalker</FormChoice>
      <FormChoice disabled value="palpatine">
        Emperor Palpatine
      </FormChoice>
      <FormChoice value="rey">Rey</FormChoice>
      <FormChoice value="tk421">TK-421</FormChoice>
    </BoundFormRow>
    <BoundFormRow type="checkbox" label="Use Jedi mind tricks?" id="jediTricks" name="mindTricks" />
    <BoundFormRow type="radio" label="Select Ship" name="ship">
      <FormChoice>Death Star</FormChoice>
      <FormChoice>Millennium Falcon</FormChoice>
      <FormChoice value="shuttle">Imperial Shuttle</FormChoice>
    </BoundFormRow>
    <BoundFormRow type={AddressInput} id="address" name="address" label="Address" />
    <BoundFormRow
      type="file"
      label="Death Star Schematics"
      name="deathStarPlans"
      id="deathStarPlans"
      multiple
    />
    <button className="btn btn-primary" type="submit">
      Submit
    </button>
  </BoundForm>
);

Bound.args = {
  errors: { lastName: 'Last Name is required' },
  onSubmit: action('submit'),
};
