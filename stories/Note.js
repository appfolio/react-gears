import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Note } from '../src';
import { boolean, object, select, text } from '@kadira/storybook-addon-knobs';

storiesOf('Note', module)
  .addWithInfo('Live example', () => (
    <Note
      date={new Date()}
      deleted={boolean('deleted', false)}
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
      date={new Date()}
      deleted={boolean('deleted', false)}
      edited={boolean('edited', false)}
      editing={boolean('editing', false)}
      from={text('from', 'Gary Thomas')}
      onDelete={note => alert('Delete: '+ JSON.stringify(note))}
      onEdit={note => alert('Edit: '+ JSON.stringify(note))}
      onUndelete={note => alert('onUndelete: '+ JSON.stringify(note))}
    >
      Goodbye cruel world...
      <h3>I'm off to join the circus</h3>
      <hr />
      <img width="300" height="80" src="https://www.appfolio.com/images/html/apm-logo-v2.png" />
    </Note>
  ));
