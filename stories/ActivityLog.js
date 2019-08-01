import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { ActivityLog, Activity } from '../src';
import { colors } from './colors';

storiesOf('ActivityLog', module)
  .add('with props', () => (
    <ActivityLog flush={boolean('flush', false)}>
      <Activity date={new Date(2017, 10, 31, 23, 15)} action="Created" by="Services" />
      <Activity date={new Date(2017, 9, 13, 13, 0)} action="Edited" />
      <Activity date={new Date(2017, 4, 1, 6, 0)} action="Edited" by="Gary">
        He messed this up
      </Activity>
      <Activity date={new Date(2017, 2, 28, 12, 1)} />
      <Activity date={new Date()}>
        Nothing to see here, move on
      </Activity>
    </ActivityLog>
  ))
  .add('Adding custom components', () => (
    <ActivityLog>
      <Activity date={new Date()} action="Edited" by="Jane Doe" />
      <Activity
        date={new Date()}
        action="Published"
        by="Martha (Leasing)"
      />
      <Activity date={new Date()} action="Created" by="services">
        Please contact <a href="mailto:william@awesomepm.com">William</a> for
        details.
      </Activity>
    </ActivityLog>
  ))
  .add('Activity', () => (
    <Activity
      action={text('action', 'Published')}
      active={boolean('active', false)}
      by={text('by', 'Joel Bandi')}
      color={select('color', ['', ...colors], '')}
      date={new Date()}
      dateFormat={text('dateFormat')}
      disabled={boolean('disabled', false)}
      onClick={action('onClick')}
    >
      {text('content')}
    </Activity>
  ));
