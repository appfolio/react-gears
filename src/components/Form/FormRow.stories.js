import { action } from '@storybook/addon-actions';
import { boolean, object, text, select } from '@storybook/addon-knobs';
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

export const LiveExample = () => (
  <div>
    <FormRow
      id="firstName"
      label={text('label', 'First Name')}
      labelSize={select('labelSize', ['sm', 'md', 'lg'], 'md')}
      feedback={text('feedback', 'You must give a first name')}
      validFeedback={text('validFeedback')}
      hint={text('hint', '')}
      width={object('width', {})}
      required={boolean('required', false)}
      inline={boolean('inline', false)}
      onChange={action('onChange')}
      stacked={boolean('stacked', false)}
      type={select('type', ['checkbox', 'number', 'password', 'radio', 'static', 'text'], 'text')}
      value={text('value', 2)}
    />
  </div>
);

export const WithSelect = () => {
  const [favorite, setFavorite] = useState('Bravo');
  return (
    <FormRow
      id="nato"
      label={text('label', 'Favorite NATO Phonetic')}
      onChange={(e) => setFavorite(e.target.value)}
      stacked={boolean('stacked', false)}
      type="select"
      value={favorite}
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

export const WithCheckboxes = () => {
  const [favorites, setFavorites] = useState(['Bravo']);
  return (
    <FormRow
      id="nato"
      label={text('label', 'Favorite NATO Phonetics')}
      stacked={boolean('stacked', false)}
      onChange={(selection) => setFavorites(selection)}
      type="checkbox"
    >
      <FormChoice
        key={1}
        checked={favorites.includes('Alpha')}
        inline={boolean('inline', false)}
        value="Alpha"
      >
        Alpha
      </FormChoice>
      <FormChoice
        key={2}
        checked={favorites.includes('Bravo')}
        inline={boolean('inline', false)}
        value="Bravo"
      >
        Bravo
      </FormChoice>
      <FormChoice
        key={3}
        checked={favorites.includes('Charlie')}
        inline={boolean('inline', false)}
        value="Charlie"
      >
        Charlie
      </FormChoice>
      <FormChoice
        key={4}
        checked={favorites.includes('Delta')}
        inline={boolean('inline', false)}
        value="Delta"
      >
        Delta
      </FormChoice>
    </FormRow>
  );
};

export const WithRadioButtons = () => {
  const [favorite, setFavorite] = useState('Bravo');
  return (
    <FormRow
      id="nato"
      label={text('label', 'Favorite NATO Phonetic')}
      onChange={(e) => setFavorite(e.target.value)}
      stacked={boolean('stacked', false)}
      type="radio"
    >
      <FormChoice
        key={1}
        name="nato"
        checked={favorite === 'Alpha'}
        inline={boolean('inline', false)}
        value="Alpha"
      >
        Alpha
      </FormChoice>
      <FormChoice
        key={2}
        name="nato"
        checked={favorite === 'Bravo'}
        inline={boolean('inline', false)}
        value="Bravo"
      >
        Bravo
      </FormChoice>
      <FormChoice
        key={3}
        name="nato"
        checked={favorite === 'Charlie'}
        inline={boolean('inline', false)}
        value="Charlie"
      >
        Charlie
      </FormChoice>
      <FormChoice
        key={4}
        name="nato"
        checked={favorite === 'Delta'}
        inline={boolean('inline', false)}
        value="Delta"
      >
        Delta
      </FormChoice>
    </FormRow>
  );
};

export const ControlledValue = () => {
  const [value, setValue] = React.useState('');
  return (
    <FormRow
      label={text('label', 'Label')}
      onChange={(e) => setValue(e.target.value)}
      stacked={boolean('stacked', false)}
      type={text('type', 'text')}
      value={value}
    />
  );
};
