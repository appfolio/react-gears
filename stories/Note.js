import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Note } from '../src';
import { boolean, select, text } from '@kadira/storybook-addon-knobs';

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
  ));
