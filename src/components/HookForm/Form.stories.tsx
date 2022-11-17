import React from 'react';
import Button from '../Button/Button';
import FormGroup from '../Form/FormGroup';
import Label from '../Label/Label';
import Form from './Form';
import FormFeedback from './FormFeedback';
import FormLabelGroup from './FormLabelGroup';
import FormRow from './FormRow';
import Input from './Input';
import { SubmitHandler } from './types';

export default {
  title: 'react-hook-form',
};

interface FormInputs {
  email: string;
  age: string;
  select: string;
  address: {
    line1: string;
    line2: string;
    state: string;
    zipCode: string;
  };
}

export const FormWithValidations = () => {
  const handleSubmit: SubmitHandler<FormInputs> = (formData, { setError }) => {
    // make api calss
    // if fails then call setError
    setError('address.line1', {
      message: 'something went wrong with line1',
    });
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit} mode="onChange">
      {({ reset, formState: { errors, dirtyFields } }) => {
        console.log('render');
        console.log(errors);
        return (
          <>
            <div className="mb-3">
              <Label for="email">Email</Label>
              <FormFeedback>
                <Input id="email" name="email" required="Can't be blank" />
              </FormFeedback>

              <FormFeedback name="email" />
            </div>
            <div className="mb-3">
              <legend>Address</legend>
              <Label for="line1">Address Line 1</Label>
              <Input invalid={!!errors.address?.line1} id="line1" name="address.line1" />
              <FormFeedback name="email" />
              <Label for="line2">Address Line 2</Label>
              <Input id="line2" name="address.addr2" />
              <Label for="state">State</Label>
              <Input id="state" name="address.state" />
              <Label for="zipCode">Zip Code</Label>
              <Input id="zipCode" name="address.zipCode" />
            </div>
            <div className="mb-3">
              <Label for="age">Age</Label>
              <Input
                min={{ value: 1, message: 'Min is 1' }}
                type="number"
                invalid={!!errors.age}
                id="age"
                name="age"
              />
              <FormFeedback invalid>{errors.age?.message}</FormFeedback>
            </div>
            <div className="mb-3">
              <Label for="select">Select</Label>
              <Input type="select" invalid={!!errors.select} id="select" name="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
              <FormFeedback invalid>{errors.select?.message}</FormFeedback>
            </div>
            <div className="mb-3">
              <FormLabelGroup inputId="select-multiple" label="Select multiple" stacked>
                <Input type="select" id="select-multiple" name="selectMuliple" multiple>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormLabelGroup>
            </div>
            <div className="mb-3">
              <FormLabelGroup inputId="checkboxes" label="Check boxes" stacked>
                <Input type="checkbox" id="checkbox1" name="checkboxes" value="Value 1" />
                <Input type="checkbox" id="checkbox2" name="checkboxes" value="Value 2" />
              </FormLabelGroup>
            </div>
            <div className="mb-3">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Input id="radio-option-1" name="radio" type="radio" value="radio-option-value-1" />{' '}
                <Label check for="radio-option-1">
                  Option one is this and that—be sure to include why it‘s great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input id="radio-option-2" name="radio" type="radio" value="radio-option-value-2" />{' '}
                <Label check for="radio-option-2">
                  Option two can be something else and selecting it will deselect option one
                </Label>
              </FormGroup>
            </div>
            <Button color="primary" type="submit">
              Submit
            </Button>
            <Button type="button" onClick={() => reset()}>
              Reset
            </Button>
          </>
        );
      }}
    </Form>
  );
};

interface FormValues {
  email: string;
}

export const SimpleFormNoValidation = () => {
  const handleSubmit: SubmitHandler<FormValues> = (formData) => {
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {({ formState: { isValid } }) => (
        <>
          <FormRow name="test" type="month" />
          <Button type="submit" disabled={!isValid}>
            Submit
          </Button>
        </>
      )}
    </Form>
  );
};

export const FormDemo = () => {
  const handleSubmit: SubmitHandler<FormValues> = (formData, { reset }) => {
    console.log(formData);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabelGroup label="First Name">
        <Input id="first-name" name="firstName" required="Can't be blank" />
      </FormLabelGroup>
      <FormLabelGroup label="Last Name">
        <Input id="last-name" name="lastName" />
      </FormLabelGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
