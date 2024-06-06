import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import FormChoice from './FormChoice';
import FormRow from './FormRow';

export default {
  title: 'FormRow',
  component: FormRow,
  parameters: {
    sourceLink: 'Form/FormRow.tsx',
  },
};

export const LiveExample = (args) => (
  <div>
    <FormRow id="firstName" {...args} />
  </div>
);
LiveExample.args = {
  label: 'First Name',
  labelSize: 'md',
  feedback: 'You must give a first name',
  validFeedback: undefined,
  hint: '',
  width: {},
  required: false,
  inline: false,
  onChange: action('onChange'),
  stacked: false,
  type: 'text',
  value: '2',
};
LiveExample.argTypes = {
  labelSize: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg'],
  },
  type: {
    control: { type: 'select' },
    options: ['checkbox', 'number', 'password', 'radio', 'static', 'text'],
  },
};

export const WithSelect = (args) => {
  const [favorite, setFavorite] = useState('Bravo');
  return (
    <FormRow
      id="nato"
      onChange={(e) => setFavorite(e.target.value)}
      type="select"
      value={favorite}
      {...args}
    >
      <FormChoice key={1} value="Alpha">
        Alpha
      </FormChoice>
      <FormChoice key={2} value="Bravo">
        Bravo
      </FormChoice>
      <FormChoice key={3} value="Charlie">
        Charlie
      </FormChoice>
      <FormChoice key={4} value="Delta">
        Delta
      </FormChoice>
    </FormRow>
  );
};
LiveExample.args = {
  label: 'Favorite NATO Phonetic',
  stacked: false,
};

export const WithCheckboxes = ({ label, stacked, inline }) => {
  const [favorites, setFavorites] = useState(['Bravo']);
  return (
    <FormRow
      id="nato"
      label={label}
      stacked={stacked}
      onChange={(selection) => setFavorites(selection)}
      type="checkbox"
    >
      <FormChoice key={1} checked={favorites.includes('Alpha')} inline={inline} value="Alpha">
        Alpha
      </FormChoice>
      <FormChoice key={2} checked={favorites.includes('Bravo')} inline={inline} value="Bravo">
        Bravo
      </FormChoice>
      <FormChoice key={3} checked={favorites.includes('Charlie')} inline={inline} value="Charlie">
        Charlie
      </FormChoice>
      <FormChoice key={4} checked={favorites.includes('Delta')} inline={inline} value="Delta">
        Delta
      </FormChoice>
    </FormRow>
  );
};
WithCheckboxes.args = {
  label: 'Favorite NATO Phonetics',
  stacked: false,
  inline: false,
};

export const WithRadioButtons = ({ label, stacked, inline }) => {
  const [favorite, setFavorite] = useState('Bravo');
  return (
    <FormRow
      id="nato"
      label={label}
      onChange={(e) => setFavorite(e.target.value)}
      stacked={stacked}
      type="radio"
    >
      <FormChoice key={1} name="nato" checked={favorite === 'Alpha'} inline={inline} value="Alpha">
        Alpha
      </FormChoice>
      <FormChoice key={2} name="nato" checked={favorite === 'Bravo'} inline={inline} value="Bravo">
        Bravo
      </FormChoice>
      <FormChoice
        key={3}
        name="nato"
        checked={favorite === 'Charlie'}
        inline={inline}
        value="Charlie"
      >
        Charlie
      </FormChoice>
      <FormChoice key={4} name="nato" checked={favorite === 'Delta'} inline={inline} value="Delta">
        Delta
      </FormChoice>
    </FormRow>
  );
};
WithRadioButtons.args = {
  label: 'Favorite NATO Phonetic',
  stacked: false,
  inline: false,
};

export const ControlledValue = (args) => {
  const [value, setValue] = React.useState('');
  return <FormRow onChange={(e) => setValue(e.target.value)} value={value} {...args} />;
};
ControlledValue.args = {
  label: 'Label',
  stacked: false,
  type: 'text',
};
