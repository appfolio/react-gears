import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Note } from '../src';
import { boolean, date, object, select, text } from '@kadira/storybook-addon-knobs';

storiesOf('Note', module)
  .addWithInfo('Live example', () => (
    <Note
      date={new Date()}
      deleted={boolean('deleted', false)}
      editable={boolean('editable', true)}
      edited={boolean('edited', false)}
      editing={boolean('editing', false)}
      from={text('from', 'Gary Thomas')}
      text={text('text', 'Goodbye Cruel World')}
      onDelete={note => alert('Delete: '+ JSON.stringify(note))}
      onEdit={note => alert('Edit: '+ JSON.stringify(note))}
      onUndelete={note => alert('onUndelete: '+ JSON.stringify(note))}
    />
  ))
  .addWithInfo('with children', () => (
    <Note
      deleted={boolean('deleted', false)}
      edited={boolean('edited', false)}
      editing={boolean('editing', false)}
      from={text('from', 'Gary Thomas')}
      text="Goodbye cruel world...  I'm off to join the circus."
      onDelete={note => alert('Delete: '+ JSON.stringify(note))}
      onEdit={note => alert('Edit: '+ JSON.stringify(note))}
      onUndelete={note => alert('onUndelete: '+ JSON.stringify(note))}
    >
      <img src="http://lorempixel.com/200/100/sports/" />
    </Note>
  ));
