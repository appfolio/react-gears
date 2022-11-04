import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';
import Button from '../Button/Button';
import FormGroup from '../Form/FormGroup';
import Label from '../Label/Label';
import Form from './Form';
import Input from './Input';

export default {
  title: 'react-hook-form',
};

interface FormInputs {
  email: string;
  age: string;
  select: string;
}

export const LiveExample = () => {
  const handleSubmit: SubmitHandler<FormInputs> = (formData) => {
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit} mode="onChange">
      {({ formState: { errors, dirtyFields } }) => (
        <>
          <div className="mb-3">
            <Label for="email">Email</Label>
            <Input
              valid={dirtyFields.email && !errors.email}
              invalid={!!errors.email}
              id="email"
              name="email"
              validate={(value) => value === 'email' || 'incorrect'}
            />
            <FormFeedback invalid>{errors.email?.message}</FormFeedback>
            <FormFeedback valid>Looks good!</FormFeedback>
          </div>
          <div className="mb-3">
            <Label for="age">Age</Label>
            <Input
              min={{ value: 1, message: 'Min is 1' }}
              type="number"
              invalid={!!errors.age}
              id="age"
              name="age"
              required="Can't be blank"
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
          <Button type="submit">Submit</Button>
        </>
      )}
    </Form>
  );
};

export const TestExample = () => {
  const handleSubmit: SubmitHandler<FormInputs> = (formData) => {
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit} mode="onChange">
      <div className="mb-3">
        <Label for="email">Email</Label>
        <Input id="email" name="email" />
        <FormFeedback valid>Looks good!</FormFeedback>
      </div>
    </Form>
  );
};
