import React from 'react';
import { action, storiesOf } from '@storybook/react';
import { Note } from '../src';
import { boolean, number, text } from '@storybook/addon-knobs';

storiesOf('Note', module)
  .addWithInfo('Live example', () => {
    const note = {
      date: new Date(),
      deleted: boolean('deleted', false),
      edited: boolean('edited', false),
      editing: boolean('editing', false),
      from: text('from', 'Gary Thomas'),
      text: text('text', 'Goodbye Cruel World')
    };

    return (
      <Note
        note={note}
        onCancel={action('onCancel')}
        onChange={action('onChange')}
        onDelete={action('onDelete')}
        onEdit={action('onEdit')}
        onSave={action('onSave')}
        onUndelete={action('onUndelete')}
        rows={number('rows', Note.defaultProps.rows)}
        saving={boolean('saving')}
      />
    );
  })
  .addWithInfo('with children', () => {
    const note = {
      date: new Date(),
      deleted: boolean('deleted', false),
      edited: boolean('edited', false),
      editing: boolean('editing', false),
      from: text('from', 'Aaron Panchal'),
      text: text('text', 'Everybody wants to rule the world.')
    };

    return (
      <Note
        note={note}
        onCancel={action('onCancel')}
        onChange={action('onChange')}
        onDelete={action('onDelete')}
        onEdit={action('onEdit')}
        onSave={action('onSave')}
        onUndelete={action('onUndelete')}
      >
        <img src="http://lorempixel.com/200/100/sports/" alt="Sample" />
      </Note>
    );
  });
