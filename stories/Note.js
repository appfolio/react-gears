import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Note } from '../src';
import { boolean, text } from '@kadira/storybook-addon-knobs';

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
        onCancel={() => alert('Cancel')}
        onChange={() => console.log('Change')}
        onDelete={n => alert(`Delete: ${JSON.stringify(n)}`)}
        onEdit={n => alert(`Edit: ${JSON.stringify(n)}`)}
        onSave={() => alert('Save')}
        onUndelete={n => alert(`onUndelete: ${JSON.stringify(n)}`)}
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
        onCancel={() => alert('Cancel')}
        onChange={() => console.log('Change')}
        onDelete={n => alert(`Delete: ${JSON.stringify(n)}`)}
        onEdit={n => alert(`Edit: ${JSON.stringify(n)}`)}
        onSave={() => alert('Save')}
        onUndelete={n => alert(`onUndelete: ${JSON.stringify(n)}`)}
      >
        <img src="http://lorempixel.com/200/100/sports/" alt="Sample" />
      </Note>
    );
  });
